import Flatbush from "flatbush";
import { readFileSync, writeFileSync } from 'fs';
import bbox from "@turf/bbox";

const str = readFileSync('./HUM_CityLimits_ODOT_2018_Fixed.geojson').toString();
const cities = JSON.parse(str);
const names = cities.features.map(f => f.properties.CITY_NAME);

const index = new Flatbush(cities.features.length);
for (const p of cities.features) {
  index.add(...bbox(p) as [number, number, number, number]);
}

index.finish();

console.log('index data', index.data);

console.log('arrayified data', Array.from(new Uint8Array(index.data)))

const data = {
  index: Array.from(new Uint8Array(index.data)),
  names
}

writeFileSync('../../src/data/cities.index.json', JSON.stringify(data));
