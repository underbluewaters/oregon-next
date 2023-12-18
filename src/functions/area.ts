import {
  Sketch,
  SketchCollection,
  Polygon,
  MultiPolygon,
  GeoprocessingHandler,
  getFirstFromParam,
  DefaultExtraParams,
  isSketchCollection,
} from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import { BBox } from "@turf/helpers";
import turfArea from "@turf/area";
import { nearestCities } from "./cities";
import { adjacentCounties } from "./counties";
import { shorelineLength } from "./shoreline";



export interface AreaResults {
  /** area of the sketch in square meters */
  area: number;
  bbox: BBox;
  cities?: string[];
  counties?: string[];
  shorelineLength: number;
}

async function calculateArea(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<AreaResults> {
  return {
    area: turfArea(sketch),
    bbox: bbox(sketch),
    cities: isSketchCollection(sketch) ? undefined : nearestCities(sketch),
    counties: isSketchCollection(sketch) ? undefined : adjacentCounties(sketch),
    shorelineLength: isSketchCollection(sketch) ? 0 : shorelineLength(sketch),
  };
}

export default new GeoprocessingHandler(calculateArea, {
  title: "calculateArea",
  description: "Function description",
  timeout: 30, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
