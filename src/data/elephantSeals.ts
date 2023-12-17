/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011.fgb' \
  'src/data/elephantSeals.ts' \
  --includeProperties Location
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011 {
  Location: string;
}


const featureData: BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[] = [
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "TILLAMOOK HEAD"
  },
  {
    "Location": "ECOLA POINT"
  },
  {
    "Location": "TILLAMOOK HEAD"
  },
  {
    "Location": "CAPE FALCON"
  },
  {
    "Location": "CAPE FALCON"
  },
  {
    "Location": "TILLAMOOK BAY"
  },
  {
    "Location": "TILLAMOOK BAY"
  },
  {
    "Location": "NEHALEM RIVER"
  },
  {
    "Location": "NETARTS BAY"
  },
  {
    "Location": "NETARTS BAY"
  },
  {
    "Location": "THREE ARCH ROCKS"
  },
  {
    "Location": "CAPE LOOKOUT"
  },
  {
    "Location": "NESTUCCA RIVER"
  },
  {
    "Location": "ALSEA BAY"
  },
  {
    "Location": "YAQUINA BAY"
  },
  {
    "Location": "SEAL ROCK"
  },
  {
    "Location": "YAQUINA BAY"
  },
  {
    "Location": "YAQUINA BAY"
  },
  {
    "Location": "YAQUINA BAY"
  },
  {
    "Location": "YAQUINA HEAD"
  },
  {
    "Location": "SEAL ROCK"
  },
  {
    "Location": "ALSEA BAY"
  },
  {
    "Location": "ALSEA BAY"
  },
  {
    "Location": "ALSEA BAY"
  },
  {
    "Location": "ALSEA BAY"
  },
  {
    "Location": "CAPE PERPETUA"
  },
  {
    "Location": "STRAWBERRY HILL"
  },
  {
    "Location": "STRAWBERRY HILL"
  },
  {
    "Location": "SOUTH 10-MILE"
  },
  {
    "Location": "CAPE FOULWEATHER"
  },
  {
    "Location": "CAPE FOULWEATHER"
  },
  {
    "Location": "CAPE FOULWEATHER"
  },
  {
    "Location": "WHALE COVE"
  },
  {
    "Location": "SILETZ BAY"
  },
  {
    "Location": "FOGARTY CREEK"
  },
  {
    "Location": "FOGARTY CREEK"
  },
  {
    "Location": "BOILER BAY"
  },
  {
    "Location": "SALMON RIVER"
  },
  {
    "Location": "CASCADE HEAD"
  },
  {
    "Location": "CASCADE HEAD"
  },
  {
    "Location": "CASCADE HEAD"
  },
  {
    "Location": "CASCADE HEAD"
  },
  {
    "Location": "CAPE LOOKOUT"
  },
  {
    "Location": "COLUMBIA RIVER"
  },
  {
    "Location": "BANDON"
  },
  {
    "Location": "CAPE ARAGO"
  },
  {
    "Location": "BANDON"
  },
  {
    "Location": "FIVEMILE POINT"
  },
  {
    "Location": "CAPE ARAGO"
  },
  {
    "Location": "CAPE ARAGO"
  },
  {
    "Location": "GREGORY POINT"
  },
  {
    "Location": "CAPE ARAGO"
  },
  {
    "Location": "COOS BAY"
  },
  {
    "Location": "COOS BAY"
  },
  {
    "Location": "COOS BAY"
  },
  {
    "Location": "SILTCOOS OUTLET"
  },
  {
    "Location": "TAKENITCH OUTLET"
  },
  {
    "Location": "UMPQUA RIVER"
  },
  {
    "Location": "UMPQUA RIVER"
  },
  {
    "Location": "SIUSLAW RIVER"
  },
  {
    "Location": "SIUSLAW RIVER"
  },
  {
    "Location": "SEA LION CAVES"
  },
  {
    "Location": "SEA LION CAVES"
  },
  {
    "Location": "COOS BAY"
  },
  {
    "Location": "TENMILE OUTLET"
  },
  {
    "Location": "BROOKINGS-CAPE FERRELO"
  },
  {
    "Location": "BROOKINGS-CAPE FERRELO"
  },
  {
    "Location": "WHALESHEAD ISLAND"
  },
  {
    "Location": "DEER POINT"
  },
  {
    "Location": "SISTERS ROCK AREA"
  },
  {
    "Location": "HUMBUG MOUNTAIN"
  },
  {
    "Location": "BANDON"
  },
  {
    "Location": "BLACKLOCK POINT"
  },
  {
    "Location": "CASTLE ROCK OR"
  },
  {
    "Location": "GULL ROCK"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "ORFORD REEF"
  },
  {
    "Location": "BLANCO REEF"
  },
  {
    "Location": "CAPE BLANCO"
  },
  {
    "Location": "THE HEADS"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "HUBBARD MOUND"
  },
  {
    "Location": "HUBBARD MOUND"
  },
  {
    "Location": "ROGUE RIVER"
  },
  {
    "Location": "ROGUE RIVER"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "ROGUE REEF"
  },
  {
    "Location": "HUNTERS ISLAND"
  },
  {
    "Location": "PISTOL RIVER"
  },
  {
    "Location": "CROOK POINT"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -123.27748,
    46.142868,
    123.27748,
    46.145697
  ],
  [
    -123.257017,
    46.149965,
    123.257017,
    46.150044
  ],
  [
    -123.242004,
    46.155027,
    123.242004,
    46.155243
  ],
  [
    -123.322348,
    46.153715,
    123.322348,
    46.154199
  ],
  [
    -123.501548,
    46.26328,
    123.501548,
    46.263337
  ],
  [
    -123.548494,
    46.248865,
    123.548494,
    46.250548
  ],
  [
    -123.57454,
    46.244977,
    123.57454,
    46.248588
  ],
  [
    -123.637155,
    46.222419,
    123.637155,
    46.231759
  ],
  [
    -123.664574,
    46.209592,
    123.664574,
    46.212976
  ],
  [
    -123.659908,
    46.239244,
    123.659908,
    46.239928
  ],
  [
    -123.696027,
    46.219985,
    123.696027,
    46.224297
  ],
  [
    -123.714156,
    46.269483,
    123.714156,
    46.271265
  ],
  [
    -123.737345,
    46.276198,
    123.737345,
    46.276522
  ],
  [
    -123.766382,
    46.235975,
    123.766382,
    46.236402
  ],
  [
    -123.79755,
    46.230642,
    123.79755,
    46.233482
  ],
  [
    -123.804185,
    46.195546,
    123.804185,
    46.19616
  ],
  [
    -123.799528,
    46.196836,
    123.799528,
    46.196993
  ],
  [
    -123.823878,
    46.228731,
    123.823878,
    46.22894
  ],
  [
    -123.893631,
    46.212042,
    123.893631,
    46.212667
  ],
  [
    -123.907952,
    46.209355,
    123.907952,
    46.211267
  ],
  [
    -123.931412,
    46.206222,
    123.931412,
    46.209067
  ],
  [
    -123.992364,
    46.279825,
    123.992364,
    46.285867
  ],
  [
    -124.019226,
    45.936554,
    124.019226,
    45.936797
  ],
  [
    -123.984566,
    45.917033,
    123.984566,
    45.918509
  ],
  [
    -123.98983,
    45.935404,
    123.98983,
    45.936256
  ],
  [
    -123.984285,
    45.767786,
    123.984285,
    45.767935
  ],
  [
    -123.982453,
    45.768137,
    123.982453,
    45.768371
  ],
  [
    -123.928092,
    45.541903,
    123.928092,
    45.549998
  ],
  [
    -123.923543,
    45.527489,
    123.923543,
    45.536212
  ],
  [
    -123.932269,
    45.661451,
    123.932269,
    45.6637
  ],
  [
    -123.945057,
    45.420415,
    123.945057,
    45.42254
  ],
  [
    -123.956785,
    45.436512,
    123.956785,
    45.438463
  ],
  [
    -123.984043,
    45.463196,
    123.984043,
    45.464025
  ],
  [
    -123.993781,
    45.340241,
    123.993781,
    45.342024
  ],
  [
    -123.967545,
    45.162858,
    123.967545,
    45.163782
  ],
  [
    -124.035303,
    44.425342,
    124.035303,
    44.434705
  ],
  [
    -124.019572,
    44.616469,
    124.019572,
    44.623224
  ],
  [
    -124.086125,
    44.489434,
    124.086125,
    44.49112
  ],
  [
    -124.058886,
    44.617966,
    124.058886,
    44.619268
  ],
  [
    -124.051139,
    44.6299,
    124.051139,
    44.630049
  ],
  [
    -124.05233,
    44.630044,
    124.05233,
    44.630207
  ],
  [
    -124.079855,
    44.673143,
    124.079855,
    44.675552
  ],
  [
    -124.094369,
    44.502028,
    124.094369,
    44.502357
  ],
  [
    -124.078071,
    44.423523,
    124.078071,
    44.425439
  ],
  [
    -124.070348,
    44.432774,
    124.070348,
    44.433598
  ],
  [
    -124.073793,
    44.430803,
    124.073793,
    44.432537
  ],
  [
    -124.057206,
    44.435509,
    124.057206,
    44.436619
  ],
  [
    -124.114441,
    44.289437,
    124.114441,
    44.29218
  ],
  [
    -124.11289,
    44.253112,
    124.11289,
    44.254975
  ],
  [
    -124.114257,
    44.248557,
    124.114257,
    44.251129
  ],
  [
    -124.116047,
    44.213201,
    124.116047,
    44.218232
  ],
  [
    -124.071623,
    44.744152,
    124.071623,
    44.744718
  ],
  [
    -124.075509,
    44.749814,
    124.075509,
    44.7517
  ],
  [
    -124.065864,
    44.75296,
    124.065864,
    44.757533
  ],
  [
    -124.069412,
    44.787683,
    124.069412,
    44.788914
  ],
  [
    -124.023742,
    44.92477,
    124.023742,
    44.926394
  ],
  [
    -124.054931,
    44.840938,
    124.054931,
    44.841921
  ],
  [
    -124.056347,
    44.837659,
    124.056347,
    44.838143
  ],
  [
    -124.059409,
    44.833762,
    124.059409,
    44.834341
  ],
  [
    -124.003846,
    45.046381,
    124.003846,
    45.047161
  ],
  [
    -124.015672,
    45.066295,
    124.015672,
    45.067898
  ],
  [
    -124.008191,
    45.074594,
    124.008191,
    45.075692
  ],
  [
    -124.010472,
    45.07169,
    124.010472,
    45.072364
  ],
  [
    -124.010208,
    45.068046,
    124.010208,
    45.071688
  ],
  [
    -124.002282,
    45.34027,
    124.002282,
    45.34066
  ],
  [
    -124.071045,
    46.233448,
    124.071045,
    46.23383
  ],
  [
    -124.441776,
    43.113962,
    124.441776,
    43.115687
  ],
  [
    -124.408196,
    43.308519,
    124.408196,
    43.319161
  ],
  [
    -124.40878,
    43.127901,
    124.40878,
    43.128385
  ],
  [
    -124.401909,
    43.216397,
    124.401909,
    43.220376
  ],
  [
    -124.400859,
    43.301537,
    124.400859,
    43.302571
  ],
  [
    -124.400539,
    43.307572,
    124.400539,
    43.309191
  ],
  [
    -124.38098,
    43.336784,
    124.38098,
    43.338756
  ],
  [
    -124.40306,
    43.311003,
    124.40306,
    43.316712
  ],
  [
    -124.323217,
    43.324652,
    124.323217,
    43.328722
  ],
  [
    -124.307419,
    43.363621,
    124.307419,
    43.368136
  ],
  [
    -124.297874,
    43.385196,
    124.297874,
    43.389512
  ],
  [
    -124.158497,
    43.870162,
    124.158497,
    43.878452
  ],
  [
    -124.17351,
    43.79213,
    124.17351,
    43.799826
  ],
  [
    -124.163224,
    43.704192,
    124.163224,
    43.721319
  ],
  [
    -124.159534,
    43.732106,
    124.159534,
    43.745481
  ],
  [
    -124.130059,
    44.001715,
    124.130059,
    44.004865
  ],
  [
    -124.126977,
    44.004675,
    124.126977,
    44.006274
  ],
  [
    -124.127658,
    44.122941,
    124.127658,
    44.123484
  ],
  [
    -124.128714,
    44.119933,
    124.128714,
    44.12256
  ],
  [
    -124.210946,
    43.385266,
    124.210946,
    43.39606
  ],
  [
    -124.231615,
    43.567237,
    124.231615,
    43.570215
  ],
  [
    -124.321848,
    42.064209,
    124.321848,
    42.067049
  ],
  [
    -124.361904,
    42.084724,
    124.361904,
    42.116615
  ],
  [
    -124.362518,
    42.13842,
    124.362518,
    42.139716
  ],
  [
    -124.376898,
    42.191729,
    124.376898,
    42.197948
  ],
  [
    -124.397439,
    42.583488,
    124.397439,
    42.587926
  ],
  [
    -124.452206,
    42.675501,
    124.452206,
    42.678353
  ],
  [
    -124.445458,
    43.10694,
    124.445458,
    43.109221
  ],
  [
    -124.546825,
    42.874328,
    124.546825,
    42.876692
  ],
  [
    -124.552381,
    42.855829,
    124.552381,
    42.856318
  ],
  [
    -124.558124,
    42.849626,
    124.558124,
    42.852291
  ],
  [
    -124.597694,
    42.778103,
    124.597694,
    42.778708
  ],
  [
    -124.594732,
    42.78659,
    124.594732,
    42.787279
  ],
  [
    -124.595895,
    42.790147,
    124.595895,
    42.79134
  ],
  [
    -124.606458,
    42.790919,
    124.606458,
    42.791452
  ],
  [
    -124.605211,
    42.788167,
    124.605211,
    42.78835
  ],
  [
    -124.601082,
    42.791909,
    124.601082,
    42.792389
  ],
  [
    -124.605511,
    42.784757,
    124.605511,
    42.785144
  ],
  [
    -124.604327,
    42.775817,
    124.604327,
    42.775991
  ],
  [
    -124.601275,
    42.777055,
    124.601275,
    42.777574
  ],
  [
    -124.583895,
    42.823808,
    124.583895,
    42.823892
  ],
  [
    -124.566654,
    42.833956,
    124.566654,
    42.841286
  ],
  [
    -124.516049,
    42.739225,
    124.516049,
    42.740336
  ],
  [
    -124.490759,
    42.44912,
    124.490759,
    42.449529
  ],
  [
    -124.425686,
    42.478357,
    124.425686,
    42.480928
  ],
  [
    -124.439372,
    42.478634,
    124.439372,
    42.479597
  ],
  [
    -124.423062,
    42.420912,
    124.423062,
    42.421336
  ],
  [
    -124.427215,
    42.421933,
    124.427215,
    42.424214
  ],
  [
    -124.465556,
    42.435757,
    124.465556,
    42.43714
  ],
  [
    -124.470511,
    42.446538,
    124.470511,
    42.446809
  ],
  [
    -124.469826,
    42.443839,
    124.469826,
    42.444277
  ],
  [
    -124.480139,
    42.445162,
    124.480139,
    42.446141
  ],
  [
    -124.484269,
    42.447955,
    124.484269,
    42.44872
  ],
  [
    -124.426384,
    42.312493,
    124.426384,
    42.315614
  ],
  [
    -124.409937,
    42.277776,
    124.409937,
    42.292846
  ],
  [
    -124.417682,
    42.227675,
    124.417682,
    42.253057
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
* @returns BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): BIO_Northern_Elephant_Seal_Haulouts_ODFW_2011[] {
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
  intersects
};
