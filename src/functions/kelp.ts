import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";

export interface KelpResults {
  /* Area of kelp in square meters */
  area: number;
  /* Fraction of the total area of the dataset. 0-1 */
  fraction: number;
}

export async function kelp(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<KelpResults> {
  const sketches = toSketchArray(sketch);
  let totalArea = 0;
  let url = `${project.dataBucketUrl()}kelp.fgb`;
  for (const sketch of sketches) {
    let features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
    const data = await overlapFeatures("kelp", features, sketch);
    const area = data.reduce((acc, cur) => acc + cur.value, 0);
    totalArea += area;
  }

  const totalAreaPrecalc = project.precalc.find((m) => m.metricId === "area" && m.classId === "kelp-total");
  const datasetTotalArea = totalAreaPrecalc ? totalAreaPrecalc.value : 1;

  return {
    area: totalArea,
    fraction: totalArea / datasetTotalArea
  }
}

export default new GeoprocessingHandler(kelp, {
  title: "kelp",
  description: "Calculates overlap with observed kelp",
  timeout: 60, // seconds
  memory: 2048, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});