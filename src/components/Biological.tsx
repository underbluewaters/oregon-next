import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { MarineMammalResults } from "../functions/marineMammals";
import { SpeciesResults } from "../functions/species";
import { CriticalHabitatsResults } from "../functions/criticalHabitats";
import { KelpResults } from "../functions/kelp";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const PercentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
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
      <ResultsCard title="Critical Habitats" functionName="criticalHabitats">
        {(data: CriticalHabitatsResults) => {
          return <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>
                {data.habitats.length === 0 && <tr><td colSpan={2}>None</td></tr>}
                {data.habitats.length > 0 && data.habitats.sort((a, b) => a.commonName.localeCompare(b.commonName)).map((row) => (
                  <tr key={row.commonName}>
                    <td>{row.commonName}</td>
                    <td>{row.scientificName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Kelp" functionName="kelp">
        {(data: KelpResults) => {
          if (data.area > 0) {
            return <p>The selected designated area overlaps with <b>{NumberFormat.format(
              data.area * 0.000247105
            )}</b> acres of observed kelp, which represents <b>{PercentFormatter.format(data.fraction)}</b> of the total observed kelp in Oregon territorial waters.</p>
          } else {
            return <p>The selected designated area <b>does not</b> overlap with any observed kelp areas.</p>
          }
        }}
      </ResultsCard>
      <ResultsCard title="Overlap with Gray Whale Migration Pathways" functionName="criticalHabitats">
        {(data: CriticalHabitatsResults) => {
          if (data.inGrayWhaleMigrationCooridor) {
            return <p>The selected designated area overlaps with Gray Whale migration pathways.</p>
          } else {
            return <p>No overlap with Gray Whale migration pathways.</p>
          }
        }}
        </ResultsCard>
    </>
  );
};
