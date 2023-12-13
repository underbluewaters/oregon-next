import simplify from "@turf/simplify";
const Flatbush = require('flatbush');
import { Feature, MultiPolygon, Polygon } from "@seasketch/geoprocessing";
import {deserializeIndex} from "../util/flatbush";
const indexData = require("../data/cities.index.json");

const index = deserializeIndex(indexData.index);


const cityNames = indexData.names;


export function nearestCities(sketch: Feature<Polygon | MultiPolygon>, numCities = 3) {
  const simplified = simplify(sketch, { tolerance: 0.01 });
  const points: [number, number][] = [];
  // Add coordinates to points array
  if (simplified.geometry.type === "Polygon") {
    points.push(...simplified.geometry.coordinates[0]);
  } else if (simplified.geometry.type === "MultiPolygon") {
    for (const poly of simplified.geometry.coordinates) {
      points.push(...poly[0]);
    }
  }
  const cities: { [name: string]: number } = {};
  for (const point of points) {
    const neighborIds = index.neighbors(point[0], point[1], numCities);
    const names = neighborIds.map((id) => cityNames[id]);
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