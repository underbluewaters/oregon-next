import { Feature, MultiPolygon, Polygon, Sketch, SketchCollection, isMultiPolygonFeature, toSketchArray } from "@seasketch/geoprocessing";
import buffer from "@turf/buffer";
import lineSplit from "@turf/line-split";
import lineLength from "@turf/length";

const shoreline = require("../data/Shoreline-Simplified.json").features[0];

export function shorelineLength(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>) {
  const sketches = toSketchArray(sketch);
  return sketches.map((sketch) => ({
    name: sketch.properties?.name || "Unknown",
    length: shorelineLengthForSketch(sketch)
  }));
}

export function shorelineLengthForSketch(sketch: Feature<Polygon | MultiPolygon>) {
  // const parts:Feature<any>[] = [];
  let length = 0;
  let split = lineSplit(shoreline, buffer(sketch, 0.1));
  split.features.forEach((splitedPart, i) => {
    if((i)%2 !== 0) {
      // parts.push(splitedPart);
      length += lineLength(splitedPart, {units: "meters"});
    }
  });
  return length;
}