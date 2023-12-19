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
import bbox from "@turf/bbox";
import { BBox } from "@turf/helpers";
import turfArea from "@turf/area";
import { nearestCities } from "./cities";
import { adjacentCounties } from "./counties";
import { shorelineLength } from "./shoreline";



export interface AreaResults {
  /** area of the sketch in square meters */
  area: {
    sketchName: string;
    area: number;
  }[];
  bbox: BBox;
  cities?: string[];
  counties?: string[];
  /* In meters */
  shorelineLength: {
    name: string;
    length: number;
  }[];
}

async function calculateArea(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<AreaResults> {
  return {
    area: toSketchArray(sketch).map(s => ({
      sketchName: s.properties.name || "",
      area: turfArea(s)
      })),
    bbox: bbox(sketch),
    cities: nearestCities(sketch),
    counties: adjacentCounties(sketch),
    shorelineLength: shorelineLength(sketch),
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
