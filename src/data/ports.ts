/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/HUM_Ports_Ecotrust_2011.fgb' \
  'src/data/ports.ts' \
  --includeProperties Name
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface HUM_Ports_Ecotrust_2011 {
  Name: 'Port of Umpqua' | 'Port of Siuslaw' | 'Port of Garibaldi' | 'Port of Tillamook Bay' | 'Port of Astoria' | 'Port of Nehalem' | 'Port of Alsea' | 'Port of Bandon' | 'Oregon International Port of Coos Bay' | 'Port of Brookings' | 'Port of Port Orford' | 'Port of Gold Beach';
}


const featureData: HUM_Ports_Ecotrust_2011[] = [
  {
    "Name": "Port of Umpqua"
  },
  {
    "Name": "Port of Siuslaw"
  },
  {
    "Name": "Port of Garibaldi"
  },
  {
    "Name": "Port of Tillamook Bay"
  },
  {
    "Name": "Port of Astoria"
  },
  {
    "Name": "Port of Nehalem"
  },
  {
    "Name": "Port of Alsea"
  },
  {
    "Name": "Port of Bandon"
  },
  {
    "Name": "Oregon International Port of Coos Bay"
  },
  {
    "Name": "Port of Brookings"
  },
  {
    "Name": "Port of Port Orford"
  },
  {
    "Name": "Port of Gold Beach"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -124.097535,
    43.703505,
    -124.097535,
    43.703505
  ],
  [
    -124.104436,
    43.967062,
    -124.104436,
    43.967062
  ],
  [
    -123.914376,
    45.554536,
    -123.914376,
    45.554536
  ],
  [
    -123.800827,
    45.425756,
    -123.800827,
    45.425756
  ],
  [
    -123.857673,
    46.187404,
    -123.857673,
    46.187404
  ],
  [
    -123.896092,
    45.719178,
    -123.896092,
    45.719178
  ],
  [
    -124.059309,
    44.434475,
    -124.059309,
    44.434475
  ],
  [
    -124.417757,
    43.120581,
    -124.417757,
    43.120581
  ],
  [
    -124.213393,
    43.367721,
    -124.213393,
    43.367721
  ],
  [
    -124.26835,
    42.053449,
    -124.26835,
    42.053449
  ],
  [
    -124.499506,
    42.740412,
    -124.499506,
    42.740412
  ],
  [
    -124.4219,
    42.418021,
    -124.4219,
    42.418021
  ]
];

export const index = new Flatbush(featureData.length);

for (const box of boundingBoxes) {
  index.add(...box);
}

index.finish();

/**
 * Perform an indexed bounding box search
 * @param minX 
 * @param minY 
 * @param maxX 
 * @param maxY 
* @returns HUM_Ports_Ecotrust_2011[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): HUM_Ports_Ecotrust_2011[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns HUM_Ports_Ecotrust_2011[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): HUM_Ports_Ecotrust_2011[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns HUM_Ports_Ecotrust_2011[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): HUM_Ports_Ecotrust_2011[] {
  const bbox = (feature.bbox || createBBox(feature)) as [number, number, number, number];
  let ids = index.search(...bbox);
  ids.filter((id) => {
    const candidate = bboxPolygon(boundingBoxes[id]);
    return booleanIntersects(feature, candidate);
  });
  return ids.map(id => featureData[id]);
}

export default {
  search,
  neighbors,
  intersects,
  boundingBoxes,
  featureData
};
