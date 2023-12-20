import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import { groupByProperty } from "../util";
import calcArea from "@turf/area";

export interface HabitatsResults {
  subtidal: {
    habitat: string, 
    /* Area of subtidal area in square meters */
    area: number,
    /* Fraction of the total area of the sketch/collection. 0-1 */
    fraction: number
  }[];
  intertidal: {
    habitat: string, 
    /* Area of subtidal area in square meters */
    area: number,
    /* Fraction of the total area of the sketch/collection. 0-1 */
    fraction: number
  }[];
}

export async function habitats(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<HabitatsResults> {
  const sketches = toSketchArray(sketch);
  const totalArea = sketches.reduce((acc, cur) => acc + calcArea(cur), 0);
  let results: HabitatsResults = {
    subtidal: [],
    intertidal: []
  };
  const subtidalHabitats = new Set<string>();
  const intertidalHabitats = new Set<string>();
  for (const sketch of sketches) {
    let url = `${project.dataBucketUrl()}habitats.fgb`;
    let features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
    // group by V4_Lith1
    const groupedFeatures = groupByProperty(features, "V4_Lith1");
    for (const habitat of Object.keys(groupedFeatures)) {
      const features = groupedFeatures[habitat];
      const data = await overlapFeatures(habitat, features, sketch);
      const area = data.reduce((acc, cur) => acc + cur.value, 0);
      results.subtidal.push({ habitat, area, fraction: area / totalArea });
      subtidalHabitats.add(habitat);
    }
    url = `${project.dataBucketUrl()}intertidal-habitats.fgb`;
    features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
    // group by Class_name
    const groupedFeatures2 = groupByProperty(features, "Class_name");
    for (const habitat of Object.keys(groupedFeatures2)) {
      const features = groupedFeatures2[habitat];
      const data = await overlapFeatures(habitat, features, sketch);
      const area = data.reduce((acc, cur) => acc + cur.value, 0);
      results.intertidal.push({ habitat, area, fraction: area / totalArea });
      intertidalHabitats.add(habitat);
    }
  }

  // if a collection, there are multiple entries for each sketch. Sum them up.
  results.subtidal = Array.from(subtidalHabitats).map((habitat) => {
    const newRecord = {habitat, area: 0, fraction: 0};
    for (const record of results.subtidal) {
      if (record.habitat === habitat) {
        newRecord.area += record.area;
        newRecord.fraction += record.fraction;
      }
    }
    return newRecord;
  });
  results.intertidal = Array.from(intertidalHabitats).map((habitat) => {
    const newRecord = {habitat, area: 0, fraction: 0};
    for (const record of results.intertidal) {
      if (record.habitat === habitat) {
        newRecord.area += record.area;
        newRecord.fraction += record.fraction;
      }
    }
    return newRecord;
  });

  return results;
}

export default new GeoprocessingHandler(habitats, {
  title: "habitats",
  description: "Calculates the area of overlapping intertidal and subtidal habitats.",
  timeout: 120, // seconds
  memory: 4096, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});