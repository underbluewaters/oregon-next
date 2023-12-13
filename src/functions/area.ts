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



export interface AreaResults {
  /** area of the sketch in square meters */
  area: number;
  bbox: BBox;
  cities?: string[];
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
  };
}

export default new GeoprocessingHandler(calculateArea, {
  title: "calculateArea",
  description: "Function description",
  timeout: 5, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
