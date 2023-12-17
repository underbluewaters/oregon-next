import {
  Sketch,
  SketchCollection,
  Polygon,
  MultiPolygon,
  GeoprocessingHandler,
  getFirstFromParam,
  DefaultExtraParams,
  isSketchCollection,
  toSketchArray,
} from "@seasketch/geoprocessing";
import keySpecies from "../data/keySpecies";
import researchSpecies from "../data/researchSpecies";
import birdSpecies from "../data/birdSpecies";


export interface SpeciesResults {
  keySpecies: string[];
  researchSpecies: string[];
  birdColoniesByImportance: {
    "HIGH": number,
    "MEDIUM": number,
    "LOW": number
  }
  birdSpecies: string[];
}

async function species(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<SpeciesResults> {
  const sketches = toSketchArray(sketch);
  const results: SpeciesResults = {
    keySpecies: [],
    researchSpecies: [],
    birdColoniesByImportance: {
      "HIGH": 0,
      "MEDIUM": 0,
      "LOW": 0
    },
    birdSpecies: []
  }
  for (const sketch of sketches) {
    const species = keySpecies.intersects(sketch);
    for (const row of species) {
      const strings = row.species.split("; ");
      for (const s of strings) {
        if (!results.keySpecies.includes(s)) {
          results.keySpecies.push(s);
        }
      }
    }
    const rSpecies = researchSpecies.intersects(sketch);
    for (const row of rSpecies) {
      const strings = row.species.split("; ");
      for (const s of strings) {
        if (!results.researchSpecies.includes(s)) {
          results.researchSpecies.push(s);
        }
      }
    }
    const colonyIds = {
      3: new Set<string>(),
      2: new Set<string>(),
      1: new Set<string>()
    };
    const birdSpeciesSet = new Set<string>();
    const birdObservations = birdSpecies.intersects(sketch);
    for (const record of birdObservations) {
      colonyIds[record.IMP].add(record.COLNO);
      birdSpeciesSet.add(record.SPECIES);
    }
    results.birdColoniesByImportance = {
      "HIGH": colonyIds[3].size,
      "MEDIUM": colonyIds[2].size,
      "LOW": colonyIds[1].size
    }
    results.birdSpecies = Array.from(birdSpeciesSet);
  }
  return results;
}

export default new GeoprocessingHandler(species, {
  title: "species",
  description: "Lists key species found within a sketch.",
  timeout: 5, // seconds
  memory: 512, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
