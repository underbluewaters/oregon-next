import { Feature, MultiPolygon, Polygon, isMultiPolygonFeature } from "@seasketch/geoprocessing";
import lineOverlap from "@turf/line-overlap";
import polygonToLine from "@turf/polygon-to-line";
import buffer from "@turf/buffer";
import lineIntersect from "@turf/line-intersect";
import lineSplit from "@turf/line-split";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import {point} from "@turf/helpers"
import lineLength from "@turf/length";

const shoreline = require("../data/osm-shoreline.json").features[0];

export function shorelineLength(sketch: Feature<Polygon | MultiPolygon>) {
  const parts:Feature<any>[] = [];
  let length = 0;
  let split = lineSplit(shoreline, buffer(sketch, 0.1));
  split.features.forEach((splitedPart, i) => {
    if((i)%2 !== 0) {
      parts.push(splitedPart);
      length += lineLength(splitedPart, {units: "miles"});
    }
  });
  return length;
}