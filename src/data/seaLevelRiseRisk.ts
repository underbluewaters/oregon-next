/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/PHY_Sea_Level_Rise_Risk_Levels_EPA_2017.fgb' \
  'src/data/seaLevelRiseRisk.ts' \
  --includeProperties CELLNAME,Risk05,Risk10,Risk15
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface PHY_Sea_Level_Rise_Risk_Levels_EPA_2017 {
  CELLNAME: string;
  Risk05: 'Low' | 'None' | 'Moderate';
  Risk10: 'Moderate' | 'Low' | 'High' | 'None';
  Risk15: 'Moderate' | 'High' | 'None';
}


const featureData: PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[] = [
  {
    "CELLNAME": "Jump Off Joe Platforms",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Yaquina Head Marine Gardens",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "BLM Tide Pool",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "South Yaquina Head",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "North Depoe Bay",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Boiler Bay",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Pirate Cove",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Whale Cove",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Otter Crest",
    "Risk05": "Low",
    "Risk10": "High",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Otter / Gull Rock",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Rocky Creek State Wayside",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Fogarty Creek",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Harts Cove",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Cape Kiwanda Head",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "South Cliff Face",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "South Intertidal",
    "Risk05": "None",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Cape Maeres",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Maxwell Point",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Pillar and Pyramid Rocks",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Smuggler's Cove",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Arch Cape",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Arcadia Beach",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Neahkahnie Haystack Rock",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Ecola Point",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Indian Beach",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Tillamook Head",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Cape Falcon",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Three Arch Rocks",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "South Cascade Head",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Road's End Headland",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Ocean Lake Intertidal",
    "Risk05": "Moderate",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Seal Rock",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Bob Creek",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Smelt Sands",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Yachats State Park",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Yachats Ocean Rd State Wayside",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Cape Perpetua Park",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Strawberry Hill",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Neptune State Park",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Stonefield Beach State Park",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Sea Lion Point",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Coquille Point and Rocks",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Bandon Haystack Rock",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Five Mile Point",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Sunset Bay",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Gregory Point/Squaw Island",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Middle Cove Cape Arago",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "North Cove Cape Arago",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "South Cove Cape Arago",
    "Risk05": "Moderate",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Shore Acres Park",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Harbor Beach",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Chetco Point",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Harris Beach",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "South Boardman Beach",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "South Boardman Rocks - Rainbow",
    "Risk05": "Moderate",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Whaleshead Rocks",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Indian Sands",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Thomas Creek",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Mid Boardman",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Cape Ferrelo",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Mack Arch Cove",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "North Boardman / Hooskanadan Creek",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Crook Point",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Cape Sebastian",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Meyers Creek Rocks",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Otter Point",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Sister's Rocks",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Arizona Beach",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Lookout Rock",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Rocky & Coal Points",
    "Risk05": "Moderate",
    "Risk10": "High",
    "Risk15": "High"
  },
  {
    "CELLNAME": "Humbug Mountain",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Nesika Head",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Battle Rock",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Nellie's & Tichenor Cove",
    "Risk05": "Low",
    "Risk10": "Low",
    "Risk15": "None"
  },
  {
    "CELLNAME": "The Heads",
    "Risk05": "Low",
    "Risk10": "Moderate",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Blacklock Point / Tower Rock",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  },
  {
    "CELLNAME": "Castle and Gull Rocks",
    "Risk05": "None",
    "Risk10": "None",
    "Risk15": "None"
  },
  {
    "CELLNAME": "Cape Blanco",
    "Risk05": "None",
    "Risk10": "Low",
    "Risk15": "Moderate"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -124.06746,
    44.643226,
    -124.060605,
    44.647609
  ],
  [
    -124.082214,
    44.671339,
    -124.074103,
    44.679709
  ],
  [
    -124.074218,
    44.671856,
    -124.071598,
    44.674258
  ],
  [
    -124.072303,
    44.671674,
    -124.063006,
    44.674203
  ],
  [
    -124.069957,
    44.807956,
    -124.056372,
    44.817123
  ],
  [
    -124.071707,
    44.823009,
    -124.051625,
    44.835176
  ],
  [
    -124.070207,
    44.81672,
    -124.061174,
    44.821081
  ],
  [
    -124.077262,
    44.786475,
    -124.06468,
    44.792697
  ],
  [
    -124.067301,
    44.744419,
    -124.059149,
    44.758667
  ],
  [
    -124.079357,
    44.730904,
    -124.065644,
    44.761143
  ],
  [
    -124.078537,
    44.780699,
    -124.069498,
    44.786577
  ],
  [
    -124.062478,
    44.834885,
    -124.048552,
    44.84686
  ],
  [
    -124.019726,
    45.063812,
    -124.004552,
    45.079912
  ],
  [
    -123.983489,
    45.214366,
    -123.966674,
    45.226005
  ],
  [
    -124.00927,
    45.334121,
    -123.992452,
    45.33891
  ],
  [
    -123.992659,
    45.334265,
    -123.970297,
    45.340108
  ],
  [
    -123.980411,
    45.479131,
    -123.958791,
    45.496221
  ],
  [
    -123.978534,
    45.458694,
    -123.964941,
    45.474793
  ],
  [
    -123.987099,
    45.488227,
    -123.978518,
    45.497584
  ],
  [
    -123.98288,
    45.742353,
    -123.958974,
    45.765266
  ],
  [
    -123.974257,
    45.798952,
    -123.961939,
    45.805424
  ],
  [
    -123.972024,
    45.828815,
    -123.955406,
    45.860439
  ],
  [
    -123.973638,
    45.879268,
    -123.96079,
    45.887157
  ],
  [
    -123.987415,
    45.906869,
    -123.964984,
    45.921461
  ],
  [
    -123.987803,
    45.921033,
    -123.974533,
    45.932326
  ],
  [
    -123.999922,
    45.931828,
    -123.981729,
    45.950232
  ],
  [
    -123.991804,
    45.760828,
    -123.976656,
    45.774195
  ],
  [
    -123.994729,
    45.458048,
    -123.979896,
    45.466783
  ],
  [
    -124.023407,
    45.042285,
    -124.005347,
    45.062832
  ],
  [
    -124.021928,
    45.024171,
    -124.005885,
    45.035363
  ],
  [
    -124.024331,
    44.971264,
    -124.015872,
    44.982077
  ],
  [
    -124.089237,
    44.489797,
    -124.081457,
    44.498711
  ],
  [
    -124.118753,
    44.24141,
    -124.109944,
    44.247805
  ],
  [
    -124.113816,
    44.318958,
    -124.096308,
    44.333205
  ],
  [
    -124.114038,
    44.307838,
    -124.097466,
    44.319316
  ],
  [
    -124.118402,
    44.289895,
    -124.098673,
    44.308157
  ],
  [
    -124.120724,
    44.268598,
    -124.10624,
    44.288448
  ],
  [
    -124.115217,
    44.251461,
    -124.110367,
    44.255134
  ],
  [
    -124.11881,
    44.254892,
    -124.105553,
    44.264733
  ],
  [
    -124.121637,
    44.206345,
    -124.105978,
    44.229944
  ],
  [
    -124.134998,
    44.116911,
    -124.120701,
    44.129572
  ],
  [
    -124.457198,
    43.099746,
    -124.422075,
    43.122678
  ],
  [
    -124.443447,
    43.079843,
    -124.43152,
    43.088926
  ],
  [
    -124.410347,
    43.210135,
    -124.388162,
    43.227991
  ],
  [
    -124.392642,
    43.32836,
    -124.368894,
    43.336409
  ],
  [
    -124.386501,
    43.33625,
    -124.369388,
    43.353007
  ],
  [
    -124.406607,
    43.300291,
    -124.399585,
    43.305911
  ],
  [
    -124.409554,
    43.305848,
    -124.388037,
    43.320583
  ],
  [
    -124.399553,
    43.298568,
    -124.393639,
    43.304468
  ],
  [
    -124.397379,
    43.318826,
    -124.380198,
    43.328358
  ],
  [
    -124.272666,
    41.996039,
    -124.21125,
    42.04518
  ],
  [
    -124.290503,
    42.041259,
    -124.271842,
    42.047172
  ],
  [
    -124.327575,
    42.037714,
    -124.288082,
    42.077664
  ],
  [
    -124.347905,
    42.079766,
    -124.323073,
    42.098936
  ],
  [
    -124.339544,
    42.082732,
    -124.335332,
    42.08587
  ],
  [
    -124.368248,
    42.134233,
    -124.351561,
    42.142628
  ],
  [
    -124.372771,
    42.142047,
    -124.355936,
    42.161446
  ],
  [
    -124.377859,
    42.160962,
    -124.35714,
    42.178339
  ],
  [
    -124.385747,
    42.177655,
    -124.358484,
    42.213042
  ],
  [
    -124.361681,
    42.09776,
    -124.34393,
    42.127675
  ],
  [
    -124.406346,
    42.228606,
    -124.386837,
    42.243888
  ],
  [
    -124.393753,
    42.212124,
    -124.374675,
    42.229445
  ],
  [
    -124.421982,
    42.24591,
    -124.403916,
    42.260116
  ],
  [
    -124.441335,
    42.311118,
    -124.409444,
    42.341941
  ],
  [
    -124.425734,
    42.290084,
    -124.403141,
    42.312056
  ],
  [
    -124.434874,
    42.459148,
    -124.416079,
    42.476727
  ],
  [
    -124.411647,
    42.586606,
    -124.396202,
    42.598332
  ],
  [
    -124.407404,
    42.598165,
    -124.396132,
    42.614662
  ],
  [
    -124.41776,
    42.624736,
    -124.400413,
    42.649582
  ],
  [
    -124.471388,
    42.688525,
    -124.447991,
    42.727189
  ],
  [
    -124.456494,
    42.665216,
    -124.431103,
    42.685417
  ],
  [
    -124.436532,
    42.476288,
    -124.414337,
    42.504319
  ],
  [
    -124.496635,
    42.738395,
    -124.489506,
    42.743394
  ],
  [
    -124.508725,
    42.733118,
    -124.496,
    42.743778
  ],
  [
    -124.524962,
    42.727246,
    -124.507696,
    42.745946
  ],
  [
    -124.556317,
    42.868699,
    -124.529875,
    42.878391
  ],
  [
    -124.560326,
    42.848198,
    -124.535249,
    42.859417
  ],
  [
    -124.571058,
    42.829257,
    -124.556047,
    42.844193
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
* @returns PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): PHY_Sea_Level_Rise_Risk_Levels_EPA_2017[] {
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
  boundingBoxes
};
