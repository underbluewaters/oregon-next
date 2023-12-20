import React from "react";
import { ResultsCard, useSketchProperties } from "@seasketch/geoprocessing/client-ui";
import { HumanUsesResults } from "../functions/humanUses";
import { OverlappingMPAs } from "../functions/mpas";
import ResultsTableCard from "./ResultsTableCard";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const PercentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const HumanUsesPage = () => {
  const [{ isCollection }] = useSketchProperties();
  const noun = isCollection ? "collection" : "designated area";
  return (
    <>
      <ResultsTableCard title="Ports" functionName="humanUses" rows={3}>
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
      </ResultsTableCard>
      <ResultsTableCard title="State Parks" functionName="humanUses" rows={3}>
        {(data: HumanUsesResults) => {
          return <>
            <p>The three nearest state parks are as follows:</p>
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
      </ResultsTableCard>
      <ResultsCard title="NPDES Outfalls" functionName="humanUses">
        {(data: HumanUsesResults) => {
          if (data.outfalls > 0) {
            return <p>There are <b>{data.outfalls} NPDES outfalls</b> within 1 mile of this {noun}.</p>
          } else {
            return <p>There are <b>no NPDES outfalls</b> within 1 mile of this {noun}.</p>
          }
        }}
      </ResultsCard>
      <ResultsTableCard title="Attendance at Nearby Parks" functionName="humanUses" rows={3}>
        {(data: HumanUsesResults) => {
          return <>
            <p>Parking lot visitor counts for nearby OPRD parking lots for the years 2016-2018.</p>
            <table style={{
              display:"block",
              maxWidth: "100%",
              overflowX: "auto",
            }} className="parking">
              <thead>
                <tr>
                <th>Name</th>
                <th>Bin</th>
                <th>Trend</th>
                <th>2016</th>
                <th>2017</th>
                <th>2018</th>
                </tr>
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
      </ResultsTableCard>
      <ResultsCard title="Overlap with Long Term Research Areas" functionName="humanUses">
        {(data: HumanUsesResults) => {
          if (data.overlapsResearch) {
            return <p>The selected {noun} overlaps with long term research areas.</p>
          } else {
            return <p>Does not overlap any long term research areas.</p>
          }
        }}
      </ResultsCard>
      <ResultsTableCard title="Recreational Activities" functionName="humanUses" rows={isCollection ? 10 : 6}>
        {(data: HumanUsesResults) => {
          return <>
            {/* <p>Recreational activities in or near this collection:</p> */}
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
                <tr className="total"><td>Total</td><td>
                  {NumberFormat.format(data.recreation.reduce((total, row) => total + row.occurances, 0))}
                </td></tr>
              </tbody>
            </table>
            <p>
              These data are the panel point results from the following studies:

              <ul>
                <li><b>Boating Recreational Ocean Users Study.</b> This group aggregated the following activities: sailing, power boating, personal water crafts, windsurfing, kite boarding, charter trips, and tow-in surfing
                </li>
                <li><b>The Human-powered group in the Recreational Ocean Users Study.</b> This group aggregated the following activities: Kayaking, Surfing, Swimming, Scuba diving, Snorkeling and Skimboarding.
                </li>
                <li>
                <b>The Shore group of the Recreational Ocean Users Study.</b> This group aggregated the following activities: beach going, hang-gliding, scenic enjoyment, storm watching, biking/hiking, off-road vehicles, and photography.
                </li>
                <li>
                Additional <b>Shore group of the Recreational Ocean Users Study.</b> This group aggregated the following activities: bird watching, tide-pooling and whale watching.
                </li>
              </ul>
            The data were collected to create a baseline of use patterns for Oregon's recreational non-consumptive ocean users. These data include only the last trip data collected over the summer of 2010. These data were collected as part of Oregon's Territorial Sea Plan revision.
            </p>
          </>;
        }}
      </ResultsTableCard>
      <ResultsTableCard title="Marine Conservation Areas" functionName="mpas" rows={isCollection ? 8 : 3}>
        {(data: OverlappingMPAs) => {
          return <>
            <p>This {noun} overlaps with the following areas</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.mpas.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.mpas.length > 0 && data.mpas.sort((a, b) => a.name.localeCompare(b.name)).map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsTableCard>
    </>
  );
};
