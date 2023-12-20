import React from "react";
import { SizeCard } from "./SizeCard";
import { ResultsCard, Skeleton, useSketchProperties } from "@seasketch/geoprocessing/client-ui";
import { AreaResults } from "../functions/area";
import { isSketchCollection } from "@seasketch/geoprocessing";
import { tableCardStyle, tableCardTitleStyle } from "./styles";
import TableSkeleton from "./TableSkeleton";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const GeographyPage = () => {
  const [{ isCollection }] = useSketchProperties();
  return (
    <>
      {isCollection ?
        <ResultsCard title="Size" functionName="calculateArea" style={tableCardStyle} titleStyle={tableCardTitleStyle}>
          {(data: AreaResults) => (
            <table className="TableCardTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Area (acres)</th>
                </tr>
              </thead>
              <tbody>
                {data.area.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.area.length > 0 && data.area.sort((a, b) => b.area - a.area).map((row) => (
                  <tr key={row.sketchName}>
                    <td>{row.sketchName}</td>
                    <td>{NumberFormat.format(row.area * 0.000247105)}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>Total</td>
                  <td>{
                    NumberFormat.format(data.area.reduce((sum, row) => sum + row.area, 0) * 0.000247105)
                  }
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </ResultsCard> : <SizeCard />}
      {/* <SketchAttributesCard autoHide /> */}
      <ResultsCard title="Nearest Cities" functionName="calculateArea" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={3} />}>
        {(data: AreaResults) => {
          if (!data.cities) {
            return <p>No cities found</p>;
          } else {
            return (
              <table className="TableCardTable">
                <tbody>
                  {data.cities.map((city) => (
                    <tr key={city}>
                      <td>{city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
        }}
      </ResultsCard>
      <ResultsCard title="Adjacent Counties" functionName="calculateArea" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={isCollection ? 4 : 2} />}>
        {(data: AreaResults) => {
          if (!data.counties) {
            return <p>No nearby found</p>;
          } else {
            return (
              <table className="TableCardTable">
                <tbody>
                  {data.counties.map((county) => (
                    <tr key={county}>
                      <td>{county.slice(0, 1)}{county.slice(1).toLocaleLowerCase()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
        }}
      </ResultsCard>
      {isCollection ? <ResultsCard title="Shoreline" functionName="calculateArea" style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={isCollection ? 4 : 2} />}>
        {(data: AreaResults) => {
          if (!Array.isArray(data.shorelineLength)) {
            return <p>No shoreline length found</p>;
          }
          return <table className="TableCardTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Length of Shoreline (Miles)</th>
              </tr>
            </thead>
            <tbody>
              {data.shorelineLength.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{NumberFormat.format(row.length * 0.00062)}</td>
                </tr>
              ))}
              <tr className="total">
                <td>Total</td>
                <td>{NumberFormat.format(data.shorelineLength.reduce((sum, row) => sum + row.length, 0) * 0.00062)}</td>
              </tr>
            </tbody>
          </table>
        }}
      </ResultsCard> : <ResultsCard title="Shoreline" functionName="calculateArea" skeleton={<><div style={{ marginTop: 14, paddingLeft: 0 }}>
        <Skeleton style={{ width: "95%", display: "block" }} />
      </div></>}>
        {(data: AreaResults) => {
          if (!Array.isArray(data.shorelineLength)) {
            return <p>No shoreline length found</p>;
          }
          return (
            <p>
              The selected designated area touches <b>{NumberFormat.format(data.shorelineLength[0].length * 0.00062)} miles</b> of shoreline.
            </p>
          );
        }
        }
      </ResultsCard>}

    </>
  );
};
