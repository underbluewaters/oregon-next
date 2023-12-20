import React from "react";
import { SpeciesResults } from "../functions/species";
import { PageStepper, useStepper } from "./PageStepper";

const maxDisplayedItems = 10;

export default function SpeciesDataCard({ data }: { data: SpeciesResults }) {
  const sortedRecords = data.keySpecies.sort((a, b) => a.localeCompare(b));
  const { currentPage, setPage, sliceRecords, numPages } = useStepper(data.keySpecies.length, maxDisplayedItems);
  return <>
    <table className="TableCardTable">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.keySpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
        {data.keySpecies.length > 0 && sliceRecords(sortedRecords).map((row) => (
          <tr key={row}>
            <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {data.keySpecies.length > maxDisplayedItems && <p><PageStepper recordCount={data.keySpecies.length} currentPage={currentPage} setPage={setPage} pages={numPages} /></p>}

  </>
}