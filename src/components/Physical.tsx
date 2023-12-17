import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { RocksAndIslandsResults } from "../functions/rocksAndIslands";
import { IntertidalAreaResults } from "../functions/intertidalArea";
import { BathymetryResults } from "../functions/bathymetry";
import { HabitatsResults } from "../functions/habitats";
import SubstrateTable from "./SubstrateTable";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const PhysicalPage = () => {
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
            <p>This zone includes <b>{NumberFormat.format(data.area * 0.000247105)} acres</b> of offshore islands.</p>
            <p>There are <b>{data.count}</b> islands included within this zone.</p>
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
            <p>This zone includes <b>{NumberFormat.format(data.area * 0.000247105)} acres</b> of intertidal area in the 0m Sea Level Rise scenario.</p>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Substrate Types" functionName="habitats">
        {(data: HabitatsResults) => {
          return <>
            <SubstrateTable title="Subtidal Substrate" rows={data.subtidal} />
            <SubstrateTable title="Intertidal Substrate" rows={data.intertidal} />
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Average Depth" functionName="bathymetry">
        {(data: BathymetryResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Average Depth (m)</th>
                  <th>Maximum Depth (m)</th>
                  <th>Minimum Depth (m)</th>
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
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Sea Level Rise" functionName="intertidalArea">
        {(data: IntertidalAreaResults) => {
          return <>
            <p><b>Sea level rise is predicted to cause the following changes in the intertidal habitat within this designated area:</b></p>
            <table>
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
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Sea Level Rise Risk" functionName="intertidalArea">
        {(data: IntertidalAreaResults) => {
          return <>
            <p>Nearby sites have the following estimated risk from sea level rise (slr) of 0.5, 1.0, and 1.5 meters:</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>SLR 0.5m</th>
                  <th>SLR 1.0m</th>
                  <th>SLR 1.5m</th>
                </tr>
              </thead>
              <tbody>
                {(data.seaLevelRiseRisk || []).length === 0 && <tr><td colSpan={4}>No nearby sites found</td></tr>}
                {(data.seaLevelRiseRisk || []).length > 0 && data.seaLevelRiseRisk.sort((a, b) => a.CELLNAME.localeCompare(b.CELLNAME)).map((site) => (
                  <tr key={site.CELLNAME}>
                    <td>{site.CELLNAME}</td>
                    <td>{site.Risk05}</td>
                    <td>{site.Risk10}</td>
                    <td>{site.Risk15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Ranges for Estimated SLR Risk Levels:
            </p>
            <ul>
              <li>Increase or Less than 10% Loss (Minor)</li>
              <li>11-29% Loss (Low)</li>
              <li>30-49% Loss (Moderate)</li>
              <li>More than 50% Loss (High)</li>
            </ul>
          </>
        }}
      </ResultsCard>

    </>
  );
};
