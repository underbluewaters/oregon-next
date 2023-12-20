import { MultiPolygon, Polygon, Sketch, SketchCollection, overlapArea, overlapFeatures, getFlatGeobufFilename, isInternalVectorDatasource, Feature, isSketchCollection, GeoprocessingHandler } from "@seasketch/geoprocessing";
import project from "../../project";
import {
  fgbFetchAll,
} from "./fgbFetchAll";
import bbox from "@turf/bbox";
import booleanWithin from "@turf/boolean-within";
import booleanOverlap from "@turf/boolean-overlap";

export interface RocksAndIslandsResults {
  /* Area of islands in square meters */
  area: number;
  /* Number of islands */
  count: number;
}

export async function rocksAndIslands(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<RocksAndIslandsResults> {
  const url = `${project.dataBucketUrl()}offshore-rocks.fgb`;
  const features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
  const data = await overlapFeatures("island-overlap-area", features, sketch);
  let count = 0;
  for (const feature of features) {
    if (isSketchCollection(sketch)) {
      for (const child of sketch.features) {
        if (booleanWithin(feature, child) || booleanOverlap(feature, child)) {
          count++;
          continue;
        }
      }
    } else {
      if (booleanWithin(feature, sketch) || booleanOverlap(feature, sketch)) {
        count++;
      }
    }
  }
  return {
    area: data.reduce((acc, cur) => acc + cur.value, 0),
    count
  }
}

export default new GeoprocessingHandler(rocksAndIslands, {
  title: "rocksAndIslands",
  description: "Calculates the area of offshore rocks and islands within a sketch.",
  timeout: 120, // seconds
  memory: 2048, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
