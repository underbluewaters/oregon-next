import React from "react";
import { ResultsCard } from "@seasketch/geoprocessing/client-ui";
import { HumanUsesResults } from "../functions/humanUses";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const PercentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const HumanUsesPage = () => {
  return (
    <>
      <ResultsCard title="Ports" functionName="humanUses">
        {(data: HumanUsesResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Distance (Miles)</th>
                </tr>
              </thead>
              <tbody>
                {data.ports.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.ports.length > 0 && data.ports.sort((a, b) => a.distance - b.distance).map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{NumberFormat.format(row.distance * 0.000621371)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="State Parks" functionName="humanUses">
        {(data: HumanUsesResults) => {
          return <>
            <h3>The three nearest state parks are:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Distance (Miles)</th>
                </tr>
              </thead>
              <tbody>
                {data.stateParks.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.stateParks.length > 0 && data.stateParks.sort((a, b) => a.distance - b.distance).map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{NumberFormat.format(row.distance * 0.000621371)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="NPDES Outfalls" functionName="humanUses">
        {(data: HumanUsesResults) => {
          return <p>There are {data.outfalls} NPDES outfalls within 1 mile of this designated area.</p>
        }}
      </ResultsCard>
      <ResultsCard title="Attendance at Nearby Parks" functionName="humanUses">
        {(data: HumanUsesResults) => {
          return <>
            <h3>Parking lot visitor counts for nearby OPRD parking lots for the years 2016-2018:</h3>
            <table>
              <thead>
                <th>Name</th>
                <th>Bin</th>
                <th>Trend</th>
                <th>2016</th>
                <th>2017</th>
                <th>2018</th>
              </thead>
              <tbody>
                {data.parkAttendance.length === 0 && <tr><td colSpan={6}>No data</td></tr>}
                {data.parkAttendance.length > 0 && data.parkAttendance.sort((a, b) => a.NAME.localeCompare(b.NAME)).map((row) => (
                  <tr key={row.NAME}>
                    <td>{row.NAME}</td>
                    <td>{row.BIN === "(null)" ? "None" : row.BIN}</td>
                    <td>{row.Trend === "(null)" ? "None" : row.Trend}</td>
                    <td>{row.Y2016 ? NumberFormat.format(row.Y2016) : "Unknown"}</td>
                    <td>{row.Y2016 ? NumberFormat.format(row.Y2017) : "Unknown"}</td>
                    <td>{row.Y2016 ? NumberFormat.format(row.Y2018) : "Unknown"}</td>
                  </tr>
                )
                )}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Overlap with Long Term Research Areas" functionName="humanUses">
        {(data: HumanUsesResults) => {
          if (data.overlapsResearch) {
            return <p>The selected designated area overlaps with long term research areas.</p>
          } else {
            return <p>Does not overlap any long term research areas.</p>
          }
        }}
      </ResultsCard>
      <ResultsCard title="Recreational Activities" functionName="humanUses">
        {(data: HumanUsesResults) => {
          return <>
            <h3>Recreational activities in or near this collection:</h3>
            <table>
              <thead>
                <tr>
                  <th>Activity Name</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {data.recreation.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.recreation.length > 0 && data.recreation.sort((a, b) => a.activity.localeCompare(b.activity)).map((row) => (
                  <tr key={row.activity}>
                    <td>{row.activity}</td>
                    <td>{NumberFormat.format(row.occurances)}</td>
                  </tr>
                ))}
                <tr><td>Total</td><td>
                  {NumberFormat.format(data.recreation.reduce((total, row) => total + row.occurances, 0))}
                </td></tr>
              </tbody>
            </table>
          </>;
        }}
      </ResultsCard>
    </>
  );
};
