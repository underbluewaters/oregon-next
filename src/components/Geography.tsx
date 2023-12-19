import React from "react";
import { SizeCard } from "./SizeCard";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { AreaResults } from "../functions/area";
import { isSketchCollection } from "@seasketch/geoprocessing";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const GeographyPage = () => {
  return (
    <>
      <ResultsCard title="Size" functionName="calculateArea">
        {(data: AreaResults) => (
          <table>
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
                  <td>{NumberFormat.format(row.area * 0.000247105)} acres</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ResultsCard>
      {/* <SketchAttributesCard autoHide /> */}
      <ResultsCard title="Nearest Cities" functionName="calculateArea" skeleton={<>
        <div style={{ marginTop: 15, paddingLeft: 30 }}>
          <Skeleton style={{ width: "50%", display: "block" }} />
          <Skeleton style={{ width: "40%", display: "block" }} />
          <Skeleton style={{ width: "55%", display: "block" }} />
        </div>
      </>}>
        {(data: AreaResults) => {
          if (!data.cities) {
            return <p>No cities found</p>;
          } else {
            return (
              <ul>
                {data.cities.map((city) => (
                  <li key={city}>
                    {city}
                  </li>
                ))}
              </ul>
            );
          }
        }}
      </ResultsCard>
      <ResultsCard title="Adjacent Counties" functionName="calculateArea" skeleton={<>
        <div style={{ marginTop: 15, paddingLeft: 30 }}>
          <Skeleton style={{ width: "50%", display: "block" }} />
          <Skeleton style={{ width: "40%", display: "block" }} />
          <Skeleton style={{ width: "55%", display: "block" }} />
        </div>
      </>}>
        {(data: AreaResults) => {
          if (!data.counties) {
            return <p>No nearby found</p>;
          } else {
            return (
              <ul>
                {data.counties.map((county) => (
                  <li key={county}>
                    {county}
                  </li>
                ))}
              </ul>
            );
          }
        }}
      </ResultsCard>
      <ResultsCard title="Shoreline" functionName="calculateArea" skeleton={<><div style={{ marginTop: 14, paddingLeft: 0 }}>
          <Skeleton style={{ width: "95%", display: "block" }} />
        </div></>}>
        {(data: AreaResults) => {
          if (!Array.isArray(data.shorelineLength)) {
            return <p>No shoreline length found</p>;
          }
          if (data.shorelineLength.length === 1) {

            return (
              <p>
                The selected designated area touches <b>{ NumberFormat.format(data.shorelineLength[0].length * 0.00062)} miles</b> of shoreline.
              </p>
            );
          } else {
            return <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Length of Shoreline (Miles)</td>
                </tr>
              </thead>
              <tbody>
                {data.shorelineLength.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{NumberFormat.format(row.length * 0.00062)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        }}
        </ResultsCard>
    </>
  );
};
