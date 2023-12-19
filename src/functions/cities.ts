import simplify from "@turf/simplify";
import { Feature, MultiPolygon, Polygon, Sketch, SketchCollection, toSketchArray } from "@seasketch/geoprocessing";
import { deserializeIndex } from "../util/flatbush";
const indexData = require("../data/cities.index.json");

const index = deserializeIndex(indexData.index);


const cityNames = indexData.names;


export function nearestCities(sketchOrCollection: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>, numCities = 3) {
  const sketches = toSketchArray(sketchOrCollection);
  const points: [number, number][] = [];
  for (const sketch of sketches) {
    const simplified = simplify(sketch, { tolerance: 0.01 });
    // Add coordinates to points array
    if (simplified.geometry.type === "Polygon") {
      // @ts-ignore
      points.push(...simplified.geometry.coordinates[0]);
    } else if (simplified.geometry.type === "MultiPolygon") {
      for (const poly of simplified.geometry.coordinates) {
        // @ts-ignore
        points.push(...poly[0]);
      }
    }
  }
  const cities: { [name: string]: number } = {};
  for (const point of points) {
    const neighborIds = index.neighbors(point[0], point[1], numCities);
    const names = neighborIds.map((id:number) => cityNames[id]);
    for (const city of names) {
      if (city in cities) {
        cities[city] += 1;
      } else {
        cities[city] = 1;
      }
    }
  }
  const keys = Object.keys(cities);
  keys.sort((a, b) => cities[b] - cities[a]);
  return keys.slice(0, numCities);
}