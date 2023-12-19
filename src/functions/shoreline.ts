import { Feature, MultiPolygon, Polygon, isMultiPolygonFeature } from "@seasketch/geoprocessing";
import buffer from "@turf/buffer";
import lineSplit from "@turf/line-split";
import lineLength from "@turf/length";

const shoreline = require("../data/Shoreline-Simplified.json").features[0];

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