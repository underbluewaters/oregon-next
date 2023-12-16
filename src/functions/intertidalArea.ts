import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, booleanOverlap, isSketchCollection, overlapFeatures } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import booleanWithin from "@turf/boolean-within";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";

export interface IntertidalAreaResults {
  /* Area of intertidal area in square meters */
  area: number;
}

export async function intertidalArea(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<IntertidalAreaResults> {
  const url = `${project.dataBucketUrl()}intertidal-area.fgb`;
  const features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
  const data = await overlapFeatures("intertidal-area", features, sketch);
  return {
    area: data.reduce((acc, cur) => acc + cur.value, 0),
  }
}

export default new GeoprocessingHandler(intertidalArea, {
  title: "intertidalArea",
  description: "Calculates the area of intertidal area within a sketch.",
  timeout: 5, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});