import React from "react";
import { ResultsCard, Skeleton, useSketchProperties } from "@seasketch/geoprocessing/client-ui";
import { MarineMammalResults } from "../functions/marineMammals";
import { SpeciesResults } from "../functions/species";
import { CriticalHabitatsResults } from "../functions/criticalHabitats";
import { KelpResults } from "../functions/kelp";
import TableSkeleton from "./TableSkeleton";
import { tableCardStyle, tableCardTitleStyle } from "./styles";
import ResultsTableCard from "./ResultsTableCard";
import { PageStepper, useStepper } from "./PageStepper";
import SpeciesDataCard from "./SpeciesDataCard";
import LongTermResearchSpeciesCard from "./LongTermResearchSpeciesCard";
import BirdSpeciesPresentCard from "./BirdSpeciesPresentCard";
const whaleCrossing = require("../WhaleCrossing.png");

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const PercentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const BiologicalPage = () => {
  const [{ isCollection }] = useSketchProperties();
  const noun = isCollection ? "collection" : "designated area";

  return (
    <>
      <ResultsTableCard title="Marine Mammal Species" functionName="marineMammals" rows={isCollection ? 5 : 1}>
        {(data: MarineMammalResults) => {
          return <>
            <table className="TableCardTable">
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
                  <td style={{ fontStyle: "italic" }}>Eumetopias jubatus</td>
                  <td>{data.haulouts["Steller Sea Lions"]}</td>
                </tr>
                <tr>
                  <td>Northern elephant seals</td>
                  <td style={{ fontStyle: "italic" }}>Mirounga angustirostris</td>
                  <td>{data.haulouts["Northern Elephant Seals"]}</td>
                </tr>
                <tr>
                  <td>California sea lions</td>
                  <td style={{ fontStyle: "italic" }}>Zalophus californianus</td>
                  <td>{data.haulouts["California Sea Lions"]}</td>
                </tr>
                <tr>
                  <td>Pacific harbor seals</td>
                  <td style={{ fontStyle: "italic" }}>Phoca vitulina</td>
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
      </ResultsTableCard>
      <ResultsTableCard rows={isCollection ? 5 : 5} title="Key Species Present" functionName="species">
        {(data: SpeciesResults) => <SpeciesDataCard data={data} />}
      </ResultsTableCard>
      <ResultsTableCard title="Long Term Research Species Found" functionName="species" rows={isCollection ? 15 : 5}>
        {(data: SpeciesResults) => <LongTermResearchSpeciesCard data={data} />}
      </ResultsTableCard>
      <ResultsTableCard title="Important Bird Colonies" functionName="species" rows={4}>
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
            <p>
              <ul>
                <li><b>High-importance</b> bird colonies are offshore colonies/complexes with ≥ 5,000 breeding birds, OR offshore or mainland colonies with Tufted Puffins, OR offshore colonies with Leach’s Storm Petrels or Fork-tailed Storm Petrels.</li>
                <li><b>Medium-importance</b> colonies include all rocks, reefs, and islands of Oregon Islands and Three Arch Rocks NWRs with breeding seabirds that were not included in Importance level 1, OR mainland seabird breeding sites with ≥ 1,000 breeding birds.</li>
                <li><b>Low-importance</b> colonies are all other colonies.</li>
              </ul>
            </p>
          </>
        }}
      </ResultsTableCard>
      <ResultsTableCard title="Bird Species Present" functionName="species" rows={8}>
        {(data: SpeciesResults) => <BirdSpeciesPresentCard data={data} />}
      </ResultsTableCard>
      <ResultsTableCard title="Critical Habitats" functionName="criticalHabitats" rows={isCollection ? 5 : 2}>
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
      </ResultsTableCard>
      <ResultsCard title="Kelp" functionName="kelp">
        {(data: KelpResults) => {
          if (data.area > 0) {
            return <p>The selected {noun} overlaps with <b>{NumberFormat.format(
              data.area * 0.000247105
            )}</b> acres of observed kelp, which represents <b>{PercentFormatter.format(data.fraction)}</b> of the total observed kelp in Oregon territorial waters.</p>
          } else {
            return <p>The selected {noun} <b>does not</b> overlap with any observed kelp areas.</p>
          }
        }}
      </ResultsCard>
      {/* <ResultsCard title="Kelp by Year" functionName="kelp">
        {(data: KelpResults) => {
          if (data.byYear.length > 0) {
            return <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Area (acres)</th>
                  <th>Fraction</th>
                </tr>
              </thead>
              <tbody>
                {data.byYear.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{NumberFormat.format(row.area)}</td>
                    <td>{PercentFormatter.format(row.fraction)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          } else {
            return <p>No data</p>
          }
        }}
      </ResultsCard> */}
      <ResultsCard title="Overlap with Gray Whale Migration Pathways" functionName="criticalHabitats">
        {(data: CriticalHabitatsResults) => {
          if (data.inGrayWhaleMigrationCooridor) {
            return <div style={{display: "flex", alignItems: "center"}}><img style={{width: 60, marginRight: 12}} src={whaleCrossing} /><p>The selected {noun} overlaps with Gray Whale migration pathways.</p></div>
          } else {
            return <p>No overlap with Gray Whale migration pathways.</p>
          }
        }}
      </ResultsCard>
    </>
  );
};
