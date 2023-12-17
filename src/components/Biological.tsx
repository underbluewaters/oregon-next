import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { MarineMammalResults } from "../functions/marineMammals";
import { SpeciesResults } from "../functions/species";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const BiologicalPage = () => {
  return (
    <>
      <ResultsCard title="Marine Mammal Species" functionName="marineMammals">
        {(data: MarineMammalResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Species</th>
                  <th>Haulout Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Steller sea lions</td>
                  <td>Eumetopias jubatus</td>
                  <td>{data.haulouts["Steller Sea Lions"]}</td>
                </tr>
                <tr>
                  <td>Northern elephant seals</td>
                  <td>Mirounga angustirostris</td>
                  <td>{data.haulouts["Northern Elephant Seals"]}</td>
                </tr>
                <tr>
                  <td>California sea lions</td>
                  <td>Zalophus californianus</td>
                  <td>{data.haulouts["California Sea Lions"]}</td>
                </tr>
                <tr>
                  <td>Pacific harbor seals</td>
                  <td>Phoca vitulina</td>
                  <td>{data.haulouts["Pacific Harbor Seals"]}</td>
                </tr>
                <tr>
                  <td colSpan={2}>Total</td>
                  {/* @ts-ignore */}
                  <td>{Object.keys(data.haulouts).reduce((acc, cur) => acc += data.haulouts[cur], 0)}</td>
                </tr>
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Key Species Present" functionName="species">
        {(data: SpeciesResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.keySpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.keySpecies.length > 0 && data.keySpecies.sort((a, b) => a.localeCompare(b)).map((row) => (
                  <tr key={row}>
                    <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Long Term Research Species Found" functionName="species">
        {(data: SpeciesResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.researchSpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.researchSpecies.length > 0 && data.researchSpecies.sort((a, b) => a.localeCompare(b)).map((row) => (
                  <tr key={row}>
                    <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Important Bird Colonies" functionName="species">
        {(data: SpeciesResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Importance</th>
                  <th>Number of Colonies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>High</td>
                  <td>{data.birdColoniesByImportance.HIGH}</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>{data.birdColoniesByImportance.MEDIUM}</td>
                </tr>
                <tr>
                  <td>Low</td>
                  <td>{data.birdColoniesByImportance.LOW}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  {/* @ts-ignore */}
                  <td>{Object.keys(data.birdColoniesByImportance).reduce((acc, cur) => acc += data.birdColoniesByImportance[cur], 0)}</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li><b>High-importance</b> bird colonies are offshore colonies/complexes with ≥ 5,000 breeding birds, OR offshore or mainland colonies with Tufted Puffins, OR offshore colonies with Leach’s Storm Petrels or Fork-tailed Storm Petrels.</li>
              <li><b>Medium-importance</b> colonies include all rocks, reefs, and islands of Oregon Islands and Three Arch Rocks NWRs with breeding seabirds that were not included in Importance level 1, OR mainland seabird breeding sites with ≥ 1,000 breeding birds.</li>
              <li><b>Low-importance</b> colonies are all other colonies.</li>
            </ul>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Bird Species Present" functionName="species">
        {(data: SpeciesResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {data.birdSpecies.length === 0 && <tr><td colSpan={2}>No data</td></tr>}
                {data.birdSpecies.length > 0 && data.birdSpecies.sort((a, b) => a.localeCompare(b)).map((row) => (
                  <tr key={row}>
                    <td>{row.slice(0, 1).toUpperCase()}{row.slice(1)}</td>
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
