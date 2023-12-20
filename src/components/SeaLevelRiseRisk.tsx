import React from "react";
import { SpeciesResults } from "../functions/species";
import { PageStepper, useStepper } from "./PageStepper";
import { IntertidalAreaResults } from "../functions/intertidalArea";

const maxDisplayedItems = 10;

export default function SeaLevelRiseRisk({ data }: { data: IntertidalAreaResults }) {
  const sortedRecords = data.seaLevelRiseRisk.sort((a, b) => a.CELLNAME.localeCompare(b.CELLNAME));
  const { currentPage, setPage, sliceRecords, numPages } = useStepper(data.seaLevelRiseRisk.length, maxDisplayedItems);
  return <>
    <p>Nearby sites have the following estimated risk from sea level rise (slr) of 0.5, 1.0, and 1.5 meters.</p>
    <table className="TableCardTable">
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
        {(data.seaLevelRiseRisk || []).length > 0 && sliceRecords(sortedRecords).map((site) => (
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
    {data.seaLevelRiseRisk.length > maxDisplayedItems && <p><PageStepper recordCount={data.seaLevelRiseRisk.length} currentPage={currentPage} setPage={setPage} pages={numPages} /></p>}
    <br />
      Ranges for Estimated SLR Risk Levels:
      <ul>
        <li><b>Minor.</b> Increase or Less than 10% Loss</li>
        <li><b>Low.</b> 11-29% Loss</li>
        <li><b>Moderate.</b> 30-49% Loss</li>
        <li><b>High.</b> More than 50% Loss</li>
      </ul>

    </p>

    

  </>
}