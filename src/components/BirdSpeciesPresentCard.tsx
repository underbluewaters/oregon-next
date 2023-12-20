import React from "react";
import { SpeciesResults } from "../functions/species";
import { PageStepper, useStepper } from "./PageStepper";

const maxDisplayedItems = 10;

export default function LongTermbirdSpeciesCard({ data }: { data: SpeciesResults }) {
  const sortedRecords = data.birdSpecies.sort((a, b) => a.localeCompare(b));
  const { currentPage, setPage, sliceRecords, numPages } = useStepper(data.birdSpecies.length, maxDisplayedItems);
  return <>
    <table className="TableCardTable">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.birdSpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
        {data.birdSpecies.length > 0 && sliceRecords(sortedRecords).map((row) => (
          <tr key={row}>
            <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {data.birdSpecies.length > maxDisplayedItems && <p><PageStepper recordCount={data.birdSpecies.length} currentPage={currentPage} setPage={setPage} pages={numPages} /></p>}

  </>
}