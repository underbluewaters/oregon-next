import React from "react";
import { ResultsCard, Skeleton, useSketchProperties } from "@seasketch/geoprocessing/client-ui";
import { RocksAndIslandsResults } from "../functions/rocksAndIslands";
import { IntertidalAreaResults } from "../functions/intertidalArea";
import { BathymetryResults } from "../functions/bathymetry";
import { HabitatsResults } from "../functions/habitats";
import SubstrateTable from "./SubstrateTable";
import { tableCardStyle, tableCardTitleStyle } from "./styles";
import TableSkeleton from "./TableSkeleton";
import ResultsTableCard from "./ResultsTableCard";
import SeaLevelRiseRisk from "./SeaLevelRiseRisk";
import CMECCard from "./CMEC";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const PhysicalPage = () => {
  const [{ isCollection }] = useSketchProperties();
  const noun = isCollection ? "collection" : "zone";
  return (
    <>
      <ResultsCard title="Islands and Rocks" functionName="rocksAndIslands" skeleton={<>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Skeleton style={{ width: "90%", display: "block" }} />
          <Skeleton style={{ width: "95%", display: "block" }} />
        </div>
      </>}>
        {(data: RocksAndIslandsResults) => {
          return <>
            <p>This {noun} includes <b>{NumberFormat.format(data.area * 0.000247105)} acres</b> of offshore islands.</p>
            <p>There are <b>{data.count}</b> islands included within this {noun}.</p>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Intertidal Area" functionName="intertidalArea" skeleton={<>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Skeleton style={{ width: "100%", display: "block" }} />
          <Skeleton style={{ width: "20%", display: "block" }} />
        </div>
      </>}>
        {(data: IntertidalAreaResults) => {
          return <>
            <p>This {noun} includes <b>{NumberFormat.format(data.area * 0.000247105)} acres</b> of intertidal area in the 0m Sea Level Rise scenario.</p>
          </>
        }}
      </ResultsCard>
      <CMECCard />
      <ResultsCard title="Subtidal Substrate" functionName="habitats" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={10} />}>
        {(data: HabitatsResults) => <SubstrateTable rows={data.subtidal} />}
      </ResultsCard>
      
      <ResultsCard title="Intertidal Substrate" functionName="habitats" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={10} />}>
        {(data: HabitatsResults) => <SubstrateTable rows={data.intertidal} />}
      </ResultsCard>
      <ResultsCard title="Average Depth" functionName="bathymetry" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={isCollection ? 5 : 1} />}>
        {(data: BathymetryResults) => {
          return <>
            <table className="TableCardTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Average (m)</th>
                  <th>Maximum (m)</th>
                  <th>Minimum (m)</th>
                </tr>
              </thead>
              <tbody>
                {(data || []).length === 0 && <tr><td colSpan={4}>No data</td></tr>}
                {(data || []).length > 0 && data.map((row) => (
                  <tr key={row.sketchName}>
                    <td>{row.sketchName}</td>
                    <td>{NumberFormat.format(row.mean)}</td>
                    <td>{NumberFormat.format(row.max)}</td>
                    <td>{NumberFormat.format(row.min)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 14, padding: "12px 16px", marginBottom: 0, backgroundColor: tableCardTitleStyle.backgroundColor, borderTop: "1px solid #eee" }}>
              Positive values for minimum depth represents elevation above mean lower low water. Unusually high values indicate cliff edges that fall within 100m of Mean High Water.
            </p>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Sea Level Rise" functionName="intertidalArea" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={isCollection ? 5 : 1} />}>
        {(data: IntertidalAreaResults) => {
          return <>
            <p style={{ margin: 0, padding: "8px 16px", paddingBottom: 16, color: tableCardTitleStyle.color, paddingTop: 0, fontSize: 15, backgroundColor: tableCardTitleStyle.backgroundColor }}>Sea level rise is predicted to cause the following changes in the intertidal habitat within this designated area.</p>
            <table className="TableCardTable">
              <thead>
                <tr>
                  <th>Sea Level Rise Scenario</th>
                  <th>Remaining Intertidal Habitat (in Acres)*</th>
                </tr>
              </thead>
              <tbody>
                {(Object.keys(data.seaLevelRiseRemainingIntertidalHabitat || {})).length === 0 && <tr><td colSpan={2}>No scenarios found</td></tr>}
                {
                  (Object.keys(data.seaLevelRiseRemainingIntertidalHabitat || {})).length > 0 &&
                  Object.keys(data.seaLevelRiseRemainingIntertidalHabitat || {}).sort((a, b) => a.localeCompare(b)).map((scenario) => (
                    <tr key={scenario}>
                      <td>{scenario}</td>
                      <td>{NumberFormat.format(data.seaLevelRiseRemainingIntertidalHabitat[scenario] * 0.000247105)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <p style={{ fontSize: 14, padding: "12px 16px", marginBottom: 0, backgroundColor: tableCardTitleStyle.backgroundColor, borderTop: "1px solid #eee" }}>
              * due to the fact that future intertidal areas may be above present-day MHW, this analysis is based on intertidal area contained in the unclipped site polygon.
            </p>
          </>
        }}
      </ResultsCard>
      <ResultsTableCard title="Sea Level Rise Risk" functionName="intertidalArea" rows={isCollection ? 5 : 1}>
        {(data: IntertidalAreaResults) => {
          return <SeaLevelRiseRisk data={data} />
        }}
      </ResultsTableCard>

    </>
  );
};
