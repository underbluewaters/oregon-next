import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import booleanIntersects from "@turf/boolean-intersects";
import grayWhaleMigrationCooridor from "../data/grayWhalePathway.json";

export interface CriticalHabitatsResults {
  /* Area of intertidal area in square meters */
  habitats: { commonName: string, scientificName: string }[];
  inGrayWhaleMigrationCooridor: boolean;
}

export async function criticalHabitats(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<CriticalHabitatsResults> {
  const sources = ["critical-habitat-areas", "critical-habitat-lines"];
  const sketches = toSketchArray(sketch);
  let inGrayWhaleMigrationCooridor = false;
  for (const sketch of sketches) {
    if (inGrayWhaleMigrationCooridor) {
      break;
    }
    for (const feature of grayWhaleMigrationCooridor.features) {
      if (booleanIntersects(sketch, feature as Feature<Polygon | MultiPolygon>)) {
        inGrayWhaleMigrationCooridor = true;
        break;
      }
    }
  }
  const matchingScientificNames: { [commonName: string]: string } = {};
  for (const source of sources) {
    const url = `${project.dataBucketUrl()}${source}.fgb`;
    for (const sketch of sketches) {
      const features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
      for (const feature of features) {
        if (booleanIntersects(feature, sketch) && feature.properties && feature.properties["comname"]) {
          matchingScientificNames[feature.properties["comname"]] = feature.properties["sciname"];
        }
      }
    }
  }
  return {
    habitats: Object.keys(matchingScientificNames).map(commonName => ({ commonName, scientificName: matchingScientificNames[commonName] })),
    inGrayWhaleMigrationCooridor
  }
}

export default new GeoprocessingHandler(criticalHabitats, {
  title: "criticalHabitats",
  description: "Lists species with critical habitats within the given sketches.",
  timeout: 60, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});