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
    </>
  );
};
