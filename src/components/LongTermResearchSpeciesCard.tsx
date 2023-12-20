import React from "react";
import { SpeciesResults } from "../functions/species";
import { PageStepper, useStepper } from "./PageStepper";

const maxDisplayedItems = 10;

export default function LongTermResearchSpeciesCard({ data }: { data: SpeciesResults }) {
  const sortedRecords = data.researchSpecies.sort((a, b) => a.localeCompare(b));
  const { currentPage, setPage, sliceRecords, numPages } = useStepper(data.researchSpecies.length, maxDisplayedItems);
  return <>
    <table className="TableCardTable">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.researchSpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
        {data.researchSpecies.length > 0 && sliceRecords(sortedRecords).map((row) => (
          <tr key={row}>
            <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {data.researchSpecies.length > maxDisplayedItems && <p><PageStepper recordCount={data.researchSpecies.length} currentPage={currentPage} setPage={setPage} pages={numPages} /></p>}

  </>
}