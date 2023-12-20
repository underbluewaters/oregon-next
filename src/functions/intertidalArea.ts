import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import seaLevelRiseRisk, { PHY_Sea_Level_Rise_Risk_Levels_EPA_2017 } from "../data/seaLevelRiseRisk";

export interface IntertidalAreaResults {
  /* Area of intertidal area in square meters */
  area: number;
  seaLevelRiseRisk: PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[];
  /** Remaining habitat area in meters under different scenarios */
  seaLevelRiseRemainingIntertidalHabitat: {[scenario: string]: number}
}

export async function intertidalArea(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<IntertidalAreaResults> {
  const url = `${project.dataBucketUrl()}intertidal-area.fgb`;
  const features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
  const data = await overlapFeatures("intertidal-area", features, sketch);
  const box = sketch.bbox || bbox(sketch);
  const risk = seaLevelRiseRisk.search(...box as [number, number, number, number]);
  const seaLevelRiseRemainingIntertidalHabitat: { [scenario: string]: number } = {};
  for (const [source, key] of [
    ["intertidal-area-0-point-5", "0.5 Meters"], 
    ["intertidal-area-1", "1 Meter"], 
    ["intertidal-area-1-point-5", "1.5 Meters"]]) {
    const url = `${project.dataBucketUrl()}${source}.fgb`;
    const features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
    const data = await overlapFeatures(source, features, sketch);
    const area = data.reduce((acc, cur) => acc + cur.value, 0);
    seaLevelRiseRemainingIntertidalHabitat[key] = area;
  }
  return {
    area: data.reduce((acc, cur) => acc + cur.value, 0),
    seaLevelRiseRisk: risk,
    seaLevelRiseRemainingIntertidalHabitat
  }
}

export default new GeoprocessingHandler(intertidalArea, {
  title: "intertidalArea",
  description: "Calculates the area of intertidal area within a sketch.",
  timeout: 120, // seconds
  memory: 4096, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});