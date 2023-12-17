import React from "react";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export default function SubstrateTable({rows, title}: {title: string, rows:{habitat: string, area: number, fraction: number}[]}) {
  return <><h3>{title}</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Area (acres)</th>
        <th>Area (% of zone)</th>
      </tr>
    </thead>
    <tbody>
      {rows.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
      {rows.length > 0 && rows.sort((a, b) => b.area - a.area).map((row) => (
        <tr key={row.habitat}>
          <td>{row.habitat}</td>
          <td>{NumberFormat.format(row.area * 0.000247105)}</td>
          <td>{NumberFormat.format(row.fraction * 100)}%</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>;
}