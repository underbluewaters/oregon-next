/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/HUM_State_Parks_Parking_Lot_Trends_2002_2018.fgb' \
  'src/data/parkAttendance.ts' \
  --includeProperties NAME,Y2016,Y2017,Y2018,Trend,BIN
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface HUM_State_Parks_Parking_Lot_Trends_2002_2018 {
  NAME: string;
  Y2016: number;
  Y2017: number;
  Y2018: number;
  Trend: '(null)' | 'Increasing' | 'Decreasing';
  BIN: '(null)' | '10,000-200,00' | '200,000-500,000' | '<10,000' | '500,000-1 million' | '1 million-1.5 million' | '>1.5 million';
}


const featureData: HUM_State_Parks_Parking_Lot_Trends_2002_2018[] = [
  {
    "NAME": "L.L. \"Stub\" Stewart",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Banks-Vernonia",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Banks-Vernonia",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Banks-Vernonia",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Bradley",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Highway",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Saddle Mountain",
    "Y2016": 77112,
    "Y2017": 81284,
    "Y2018": 86692,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Sunset Beach",
    "Y2016": 38874,
    "Y2017": 38842,
    "Y2018": 40306,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Del Rey Beach",
    "Y2016": 420338,
    "Y2017": 416604,
    "Y2018": 447940,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Gearhart Ocean",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Neahkahnie-Manzanita",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Nehalem Bay",
    "Y2016": 166474,
    "Y2017": 150530,
    "Y2018": 180524,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Cougar Valley",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Munson Creek",
    "Y2016": 214488,
    "Y2017": 204008,
    "Y2018": 189802,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "H.B. Van Duzer Forest",
    "Y2016": 237606,
    "Y2017": 243650,
    "Y2018": 254160,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "South Beach",
    "Y2016": 66388,
    "Y2017": 80780,
    "Y2018": 59746,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Yaquina Bay",
    "Y2016": 0,
    "Y2017": 0,
    "Y2018": null,
    "Trend": "Increasing",
    "BIN": "<10,000"
  },
  {
    "NAME": "Lost Creek",
    "Y2016": 178368,
    "Y2017": 185272,
    "Y2018": 207108,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Brian Booth - Ona",
    "Y2016": 574976,
    "Y2017": 635912,
    "Y2018": 676822,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Brian Booth - Beaver Creek",
    "Y2016": 643968,
    "Y2017": 1105198,
    "Y2018": 854992,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "W.B. Nelson",
    "Y2016": 17626,
    "Y2017": 14774,
    "Y2018": 16448,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Alsea Bay",
    "Y2016": 1401592,
    "Y2017": 1387544,
    "Y2018": 1234260,
    "Trend": "Increasing",
    "BIN": "1 million-1.5 million"
  },
  {
    "NAME": "Beachside",
    "Y2016": 214764,
    "Y2017": 1056538,
    "Y2018": 924984,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "San Marine",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Ocean Shore",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Smelt Sands",
    "Y2016": 44690,
    "Y2017": 75434,
    "Y2018": 69350,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Yachats Ocean Road",
    "Y2016": 0,
    "Y2017": 0,
    "Y2018": 0,
    "Trend": "Decreasing",
    "BIN": "<10,000"
  },
  {
    "NAME": "Yachats",
    "Y2016": 0,
    "Y2017": 0,
    "Y2018": 0,
    "Trend": "Decreasing",
    "BIN": "<10,000"
  },
  {
    "NAME": "Neptune",
    "Y2016": 263336,
    "Y2017": 234556,
    "Y2018": 176518,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Stonefield Beach",
    "Y2016": 53056,
    "Y2017": 54988,
    "Y2018": 58764,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Tokatee Klootchman",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Tokatee Klootchman",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Muriel O. Ponsler",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Carl G. Washburne",
    "Y2016": 484286,
    "Y2017": 491536,
    "Y2018": 521972,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Heceta Head Lighthouse",
    "Y2016": 303554,
    "Y2017": 269464,
    "Y2018": 247968,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Governor Patterson",
    "Y2016": 217408,
    "Y2017": 235644,
    "Y2018": 272424,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Collins Creek",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Driftwood Beach",
    "Y2016": 434520,
    "Y2017": 340456,
    "Y2018": 369272,
    "Trend": "Decreasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "L. Presley & Vera C. Gill",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Seal Rock",
    "Y2016": 75864,
    "Y2017": 75496,
    "Y2018": 80680,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Roads End",
    "Y2016": 77152,
    "Y2017": 88996,
    "Y2018": 97480,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "D River",
    "Y2016": 484966,
    "Y2017": 493882,
    "Y2018": 512508,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Devil's Lake",
    "Y2016": 321452,
    "Y2017": 356568,
    "Y2018": 368588,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Devil's Lake",
    "Y2016": 321452,
    "Y2017": 356568,
    "Y2018": 368588,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Boiler Bay",
    "Y2016": 548514,
    "Y2017": 649838,
    "Y2018": 714008,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Fogarty Creek",
    "Y2016": 337960,
    "Y2017": 379448,
    "Y2018": 319704,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Fishing Rock",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Fogarty Creek",
    "Y2016": 337960,
    "Y2017": 379448,
    "Y2018": 319704,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Depoe Bay Whale Watch Center",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Rocky Creek",
    "Y2016": 101580,
    "Y2017": 97916,
    "Y2018": 95056,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Otter Crest",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Devil's Punch Bowl",
    "Y2016": 282196,
    "Y2017": 432546,
    "Y2018": 419994,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Agate Beach",
    "Y2016": 1628348,
    "Y2017": 1637444,
    "Y2018": 1700116,
    "Trend": "Increasing",
    "BIN": ">1.5 million"
  },
  {
    "NAME": "Beverly Beach",
    "Y2016": 814998,
    "Y2017": 822210,
    "Y2018": 758920,
    "Trend": "Decreasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Otter Crest Viewpoint (ODOT)",
    "Y2016": 124020,
    "Y2017": 138688,
    "Y2018": 136844,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Gleneden Beach",
    "Y2016": 232860,
    "Y2017": 286852,
    "Y2018": 284492,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Neskowin Beach",
    "Y2016": 189372,
    "Y2017": 175218,
    "Y2018": 172156,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Bob Straub",
    "Y2016": 805642,
    "Y2017": 825162,
    "Y2018": 747664,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Clay Myers",
    "Y2016": 621440,
    "Y2017": 751268,
    "Y2018": 520704,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Sitka Sedge",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sand Lake",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Cape Lookout",
    "Y2016": 569716,
    "Y2017": 511848,
    "Y2018": 582908,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Cape Kiwanda",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Cape Meares",
    "Y2016": 548708,
    "Y2017": 544510,
    "Y2018": 578788,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Symons",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Oceanside Beach",
    "Y2016": 174210,
    "Y2017": 172872,
    "Y2018": 169168,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Manhattan Beach",
    "Y2016": 204080,
    "Y2017": 263762,
    "Y2018": 205396,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Twin Rocks",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Oswald West",
    "Y2016": 138836,
    "Y2017": 140108,
    "Y2018": 140496,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Hug Point",
    "Y2016": 233688,
    "Y2017": 232054,
    "Y2018": 232650,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Arcadia Beach",
    "Y2016": 1348714,
    "Y2017": 1201592,
    "Y2018": 1227129,
    "Trend": "Increasing",
    "BIN": "1 million-1.5 million"
  },
  {
    "NAME": "Tolovana Beach",
    "Y2016": 38560,
    "Y2017": 39040,
    "Y2018": 40208,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Arcadia Beach",
    "Y2016": 1348714,
    "Y2017": 1201592,
    "Y2018": 1227129,
    "Trend": "Increasing",
    "BIN": "1 million-1.5 million"
  },
  {
    "NAME": "Haystack Hill",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "John Yeon",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Ecola",
    "Y2016": 339056,
    "Y2017": 375472,
    "Y2018": 355604,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Elmer Feldenheimer",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Fort Stevens",
    "Y2016": 291080,
    "Y2017": 294972,
    "Y2018": 302376,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Bandon",
    "Y2016": 1204284,
    "Y2017": 1103072,
    "Y2018": 1182510,
    "Trend": "Increasing",
    "BIN": "1 million-1.5 million"
  },
  {
    "NAME": "Face Rock",
    "Y2016": 302312,
    "Y2017": 315036,
    "Y2018": 327660,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Bullards Beach",
    "Y2016": 637176,
    "Y2017": 562204,
    "Y2018": 652124,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Yoakam Point",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Sunset Bay",
    "Y2016": 54454,
    "Y2017": 47110,
    "Y2018": 51856,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Shore Acres",
    "Y2016": 76320,
    "Y2017": 86060,
    "Y2018": 77700,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Cape Arago",
    "Y2016": 602428,
    "Y2017": 585516,
    "Y2018": 646560,
    "Trend": "Decreasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Seven Devils",
    "Y2016": 58758,
    "Y2017": 67564,
    "Y2018": 77780,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Conde B. McCullough",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Umpqua Lighthouse",
    "Y2016": 33324,
    "Y2017": 34648,
    "Y2018": 24136,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "William M. Tugman",
    "Y2016": 129218,
    "Y2017": 104040,
    "Y2018": 0,
    "Trend": "Decreasing",
    "BIN": "<10,000"
  },
  {
    "NAME": "Bolon Island Tideways",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Siltcoos",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Joaquin Miller",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Jessie M. Honeyman",
    "Y2016": 217492,
    "Y2017": 185676,
    "Y2018": 207300,
    "Trend": "Decreasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Prichard",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Darlingtonia",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Siuslaw North Jetty",
    "Y2016": 67188,
    "Y2017": 67516,
    "Y2018": 74396,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "(null)",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Umpqua",
    "Y2016": 5502,
    "Y2017": 18226,
    "Y2018": 18522,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Golden and Silver Falls",
    "Y2016": 284872,
    "Y2017": 337644,
    "Y2018": 284212,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Maria C. Jackson",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Albert H. Powers",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Hoffman",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Coquille Myrtle Grove",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Alfred A. Loeb",
    "Y2016": 1605374,
    "Y2017": 1691972,
    "Y2018": 1649094,
    "Trend": "Increasing",
    "BIN": ">1.5 million"
  },
  {
    "NAME": "Crissey Field",
    "Y2016": 461765,
    "Y2017": 409732,
    "Y2018": 519120,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Winchuck",
    "Y2016": 0,
    "Y2017": 0,
    "Y2018": 0,
    "Trend": "Decreasing",
    "BIN": "<10,000"
  },
  {
    "NAME": "McVay Rock",
    "Y2016": 188088,
    "Y2017": 192920,
    "Y2018": 189912,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Harris Beach",
    "Y2016": 234012,
    "Y2017": 240576,
    "Y2018": 252140,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Arizona Beach",
    "Y2016": 1377276,
    "Y2017": 1201723,
    "Y2018": 1219588,
    "Trend": "Increasing",
    "BIN": "1 million-1.5 million"
  },
  {
    "NAME": "Ophir Wayside",
    "Y2016": 144780,
    "Y2017": 141826,
    "Y2018": 141626,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Sisters Rock",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Humbug Mountain",
    "Y2016": 300692,
    "Y2017": 246328,
    "Y2018": 222368,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Port Orford Cedar Forest",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Floras Lake",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Cape Blanco",
    "Y2016": 580546,
    "Y2017": 579336,
    "Y2018": 614502,
    "Trend": "Decreasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Port Orford Heads",
    "Y2016": 133748,
    "Y2017": 111638,
    "Y2018": 105600,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Tseriadun",
    "Y2016": 24258,
    "Y2017": 32058,
    "Y2018": 35258,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Paradise Point",
    "Y2016": 111396,
    "Y2017": 125402,
    "Y2018": 120682,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Humbug Mountain",
    "Y2016": 300692,
    "Y2017": 246328,
    "Y2018": 222368,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Humbug Mountain",
    "Y2016": 300692,
    "Y2017": 246328,
    "Y2018": 222368,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Otter Point",
    "Y2016": 130228,
    "Y2017": 119828,
    "Y2018": 132544,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Otter Point",
    "Y2016": 130228,
    "Y2017": 119828,
    "Y2018": 132544,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Otter Point",
    "Y2016": 130228,
    "Y2017": 119828,
    "Y2018": 132544,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Geisel Monument",
    "Y2016": 529182,
    "Y2017": 318580,
    "Y2018": 298718,
    "Trend": "Increasing",
    "BIN": "200,000-500,000"
  },
  {
    "NAME": "Cape Sebastian",
    "Y2016": 579224,
    "Y2017": 628104,
    "Y2018": 570304,
    "Trend": "Increasing",
    "BIN": "500,000-1 million"
  },
  {
    "NAME": "Buena Vista",
    "Y2016": null,
    "Y2017": null,
    "Y2018": null,
    "Trend": "(null)",
    "BIN": "(null)"
  },
  {
    "NAME": "Pistol River",
    "Y2016": 98318,
    "Y2017": 103210,
    "Y2018": 120326,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Pistol River",
    "Y2016": 98318,
    "Y2017": 103210,
    "Y2018": 120326,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Pistol River",
    "Y2016": 98318,
    "Y2017": 103210,
    "Y2018": 120326,
    "Trend": "Increasing",
    "BIN": "10,000-200,00"
  },
  {
    "NAME": "Samuel H. Boardman",
    "Y2016": 79256,
    "Y2017": 88898,
    "Y2018": 83002,
    "Trend": "Decreasing",
    "BIN": "10,000-200,00"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -123.200358,
    45.700769,
    -123.173285,
    45.756488
  ],
  [
    -123.233967,
    45.621809,
    -123.113362,
    45.856312
  ],
  [
    -123.213813,
    45.840576,
    -123.213663,
    45.840602
  ],
  [
    -123.216794,
    45.840279,
    -123.216243,
    45.840582
  ],
  [
    -123.261678,
    45.738468,
    -123.261236,
    45.738698
  ],
  [
    -123.269972,
    45.741853,
    -123.269771,
    45.741954
  ],
  [
    -123.27195,
    45.740397,
    -123.269687,
    45.74197
  ],
  [
    -123.27403,
    45.742795,
    -123.27226,
    45.743386
  ],
  [
    -123.279074,
    45.745137,
    -123.274532,
    45.750644
  ],
  [
    -123.283385,
    45.749451,
    -123.275833,
    45.755132
  ],
  [
    -123.280491,
    45.750518,
    -123.278332,
    45.752712
  ],
  [
    -123.281931,
    45.752336,
    -123.279709,
    45.753934
  ],
  [
    -123.284708,
    45.753799,
    -123.281901,
    45.755191
  ],
  [
    -123.287859,
    45.755052,
    -123.284637,
    45.756784
  ],
  [
    -123.382222,
    45.771684,
    -123.361565,
    45.778671
  ],
  [
    -123.440093,
    46.170351,
    -123.43482,
    46.172243
  ],
  [
    -123.505444,
    45.798281,
    -123.464047,
    45.830958
  ],
  [
    -123.610828,
    45.880101,
    -123.604438,
    45.884848
  ],
  [
    -123.645084,
    45.887582,
    -123.616971,
    45.895724
  ],
  [
    -123.555379,
    45.858632,
    -123.551289,
    45.859533
  ],
  [
    -123.554718,
    45.8578,
    -123.551278,
    45.858634
  ],
  [
    -123.74669,
    45.905043,
    -123.648686,
    45.981423
  ],
  [
    -123.944083,
    46.09699,
    -123.929277,
    46.10806
  ],
  [
    -123.931905,
    46.046114,
    -123.925831,
    46.048451
  ],
  [
    -123.931727,
    46.011518,
    -123.920716,
    46.038809
  ],
  [
    -123.942466,
    45.726034,
    -123.94113,
    45.727278
  ],
  [
    -123.941134,
    45.657527,
    -123.915969,
    45.710268
  ],
  [
    -123.763253,
    45.699904,
    -123.740452,
    45.721677
  ],
  [
    -123.781304,
    45.361713,
    -123.767322,
    45.366674
  ],
  [
    -123.82282,
    45.022776,
    -123.657839,
    45.07327
  ],
  [
    -124.073806,
    44.597988,
    -124.052176,
    44.619298
  ],
  [
    -124.066142,
    44.622521,
    -124.058496,
    44.625808
  ],
  [
    -124.075019,
    44.535325,
    -124.070561,
    44.560187
  ],
  [
    -124.078642,
    44.494188,
    -124.048156,
    44.531852
  ],
  [
    -124.058268,
    44.504333,
    -124.033427,
    44.530297
  ],
  [
    -124.035042,
    44.414098,
    -124.03396,
    44.41557
  ],
  [
    -124.067854,
    44.427723,
    -124.067329,
    44.428172
  ],
  [
    -124.090942,
    44.378871,
    -124.088065,
    44.386897
  ],
  [
    -124.097941,
    44.345445,
    -124.095095,
    44.346897
  ],
  [
    -124.095338,
    44.3569,
    -124.093348,
    44.363114
  ],
  [
    -124.108367,
    44.320361,
    -124.101002,
    44.330146
  ],
  [
    -124.114437,
    44.291546,
    -124.100309,
    44.309521
  ],
  [
    -124.109858,
    44.307763,
    -124.100008,
    44.320361
  ],
  [
    -124.115507,
    44.2411,
    -124.103857,
    44.276203
  ],
  [
    -124.112465,
    44.222541,
    -124.109215,
    44.226633
  ],
  [
    -124.115372,
    44.208098,
    -124.113916,
    44.20919
  ],
  [
    -124.115158,
    44.214001,
    -124.113376,
    44.215416
  ],
  [
    -124.117471,
    44.169646,
    -124.115083,
    44.170405
  ],
  [
    -124.123063,
    44.141055,
    -124.097333,
    44.179439
  ],
  [
    -124.129526,
    44.127308,
    -124.102521,
    44.142042
  ],
  [
    -124.087361,
    44.400764,
    -124.082209,
    44.414914
  ],
  [
    -124.084346,
    44.481269,
    -124.080566,
    44.48329
  ],
  [
    -124.081966,
    44.461757,
    -124.076996,
    44.465155
  ],
  [
    -124.082505,
    44.454937,
    -124.074474,
    44.457075
  ],
  [
    -124.085304,
    44.494862,
    -124.082739,
    44.497477
  ],
  [
    -124.01037,
    45.007473,
    -124.007857,
    45.009021
  ],
  [
    -124.01864,
    44.966616,
    -124.016413,
    44.968135
  ],
  [
    -124.014137,
    44.967088,
    -124.008329,
    44.971793
  ],
  [
    -124.004319,
    44.961621,
    -123.994494,
    44.967953
  ],
  [
    -124.066601,
    44.826056,
    -124.058006,
    44.830246
  ],
  [
    -124.059555,
    44.829853,
    -124.05559,
    44.833337
  ],
  [
    -124.051993,
    44.843824,
    -124.049331,
    44.846396
  ],
  [
    -124.054932,
    44.833557,
    -124.039642,
    44.848028
  ],
  [
    -124.063255,
    44.809401,
    -124.06205,
    44.811667
  ],
  [
    -124.074772,
    44.777262,
    -124.068034,
    44.787577
  ],
  [
    -124.068242,
    44.759591,
    -124.065227,
    44.761697
  ],
  [
    -124.066067,
    44.745484,
    -124.061557,
    44.749925
  ],
  [
    -124.05938,
    44.655846,
    -124.054096,
    44.660383
  ],
  [
    -124.057823,
    44.724033,
    -124.040006,
    44.73866
  ],
  [
    -124.059662,
    44.754614,
    -124.05874,
    44.755279
  ],
  [
    -124.039581,
    44.875401,
    -124.035234,
    44.877217
  ],
  [
    -123.987989,
    45.100834,
    -123.979828,
    45.122926
  ],
  [
    -123.972255,
    45.160663,
    -123.955613,
    45.197971
  ],
  [
    -123.953968,
    45.271945,
    -123.942379,
    45.285272
  ],
  [
    -123.966509,
    45.256515,
    -123.949861,
    45.27592
  ],
  [
    -123.95455,
    45.289165,
    -123.945778,
    45.300119
  ],
  [
    -124.007924,
    45.335965,
    -123.953052,
    45.432228
  ],
  [
    -123.98071,
    45.215887,
    -123.967444,
    45.245807
  ],
  [
    -123.979099,
    45.478587,
    -123.962931,
    45.493699
  ],
  [
    -123.967808,
    45.452995,
    -123.965268,
    45.456593
  ],
  [
    -123.973573,
    45.459609,
    -123.969381,
    45.472503
  ],
  [
    -123.942371,
    45.634719,
    -123.939107,
    45.64226
  ],
  [
    -123.951946,
    45.59131,
    -123.9489,
    45.595121
  ],
  [
    -123.982467,
    45.738304,
    -123.925788,
    45.803237
  ],
  [
    -123.963253,
    45.826221,
    -123.958155,
    45.837336
  ],
  [
    -123.963965,
    45.857269,
    -123.963123,
    45.857714
  ],
  [
    -123.961808,
    45.872198,
    -123.959943,
    45.873183
  ],
  [
    -123.962161,
    45.845959,
    -123.95937,
    45.848598
  ],
  [
    -123.962209,
    45.881828,
    -123.959852,
    45.884205
  ],
  [
    -123.970044,
    45.907986,
    -123.966889,
    45.910985
  ],
  [
    -123.993329,
    45.911039,
    -123.951029,
    45.975661
  ],
  [
    -123.980733,
    45.923338,
    -123.945777,
    45.97388
  ],
  [
    -124.023507,
    46.150002,
    -123.950616,
    46.238176
  ],
  [
    -124.449676,
    43.021968,
    -124.429864,
    43.085766
  ],
  [
    -124.436326,
    43.1044,
    -124.432918,
    43.107956
  ],
  [
    -124.426234,
    43.121927,
    -124.39139,
    43.18169
  ],
  [
    -124.362467,
    43.339558,
    -124.356699,
    43.344319
  ],
  [
    -124.381039,
    43.322756,
    -124.359322,
    43.339627
  ],
  [
    -124.397818,
    43.304898,
    -124.375747,
    43.331221
  ],
  [
    -124.402418,
    43.301357,
    -124.385484,
    43.309221
  ],
  [
    -124.392194,
    43.233463,
    -124.383462,
    43.237359
  ],
  [
    -124.221216,
    43.433101,
    -124.204187,
    43.448254
  ],
  [
    -124.201922,
    43.626915,
    -124.183284,
    43.664856
  ],
  [
    -124.183395,
    43.593001,
    -124.166576,
    43.628982
  ],
  [
    -124.104192,
    43.711156,
    -124.09966,
    43.713313
  ],
  [
    -124.061185,
    43.690477,
    -124.042948,
    43.695356
  ],
  [
    -124.12016,
    43.893169,
    -124.11764,
    43.896871
  ],
  [
    -124.118664,
    43.955674,
    -124.103497,
    43.966493
  ],
  [
    -124.114864,
    43.918636,
    -124.094529,
    43.936381
  ],
  [
    -124.101948,
    43.96034,
    -124.101185,
    43.960745
  ],
  [
    -124.098492,
    44.045387,
    -124.094832,
    44.047532
  ],
  [
    -124.137279,
    44.013681,
    -124.125875,
    44.038062
  ],
  [
    -123.85703,
    43.643486,
    -123.846862,
    43.650573
  ],
  [
    -123.856265,
    43.650575,
    -123.854201,
    43.654191
  ],
  [
    -123.857593,
    43.654182,
    -123.855684,
    43.656632
  ],
  [
    -123.872636,
    43.655376,
    -123.869512,
    43.656545
  ],
  [
    -123.887463,
    43.650678,
    -123.877568,
    43.654332
  ],
  [
    -123.908155,
    43.650546,
    -123.902322,
    43.652992
  ],
  [
    -123.949136,
    43.682055,
    -123.944494,
    43.684448
  ],
  [
    -123.936143,
    43.676949,
    -123.93247,
    43.679705
  ],
  [
    -123.932527,
    43.668251,
    -123.92414,
    43.67719
  ],
  [
    -123.98946,
    43.690864,
    -123.976717,
    43.692012
  ],
  [
    -123.936368,
    43.477982,
    -123.926616,
    43.487862
  ],
  [
    -123.86614,
    43.159052,
    -123.861161,
    43.162822
  ],
  [
    -124.133261,
    42.965977,
    -124.12598,
    42.968056
  ],
  [
    -124.11974,
    43.034813,
    -124.117102,
    43.037554
  ],
  [
    -124.107714,
    42.948493,
    -124.101512,
    42.951429
  ],
  [
    -124.207076,
    42.105698,
    -124.182754,
    42.128116
  ],
  [
    -124.214611,
    41.998486,
    -124.208463,
    42.005094
  ],
  [
    -124.213601,
    42.005667,
    -124.210708,
    42.008226
  ],
  [
    -124.23697,
    42.018351,
    -124.232513,
    42.021272
  ],
  [
    -124.317151,
    42.062677,
    -124.300529,
    42.07273
  ],
  [
    -124.402191,
    42.613528,
    -124.392054,
    42.620674
  ],
  [
    -124.401466,
    42.534726,
    -124.398788,
    42.53761
  ],
  [
    -124.40857,
    42.586562,
    -124.394544,
    42.595614
  ],
  [
    -124.462622,
    42.670539,
    -124.41641,
    42.714339
  ],
  [
    -124.478321,
    42.843021,
    -124.473936,
    42.848336
  ],
  [
    -124.542251,
    42.850406,
    -124.506169,
    42.897076
  ],
  [
    -124.56309,
    42.817519,
    -124.511837,
    42.853792
  ],
  [
    -124.51637,
    42.732319,
    -124.503975,
    42.745917
  ],
  [
    -124.512032,
    42.744545,
    -124.506697,
    42.749008
  ],
  [
    -124.51795,
    42.760031,
    -124.514053,
    42.761661
  ],
  [
    -124.467572,
    42.71792,
    -124.46371,
    42.720757
  ],
  [
    -124.478107,
    42.732118,
    -124.473343,
    42.736879
  ],
  [
    -124.419796,
    42.463009,
    -124.419739,
    42.463605
  ],
  [
    -124.428878,
    42.4498,
    -124.419276,
    42.466037
  ],
  [
    -124.422996,
    42.452742,
    -124.422213,
    42.453414
  ],
  [
    -124.416556,
    42.490025,
    -124.415234,
    42.492212
  ],
  [
    -124.433351,
    42.315929,
    -124.396099,
    42.363788
  ],
  [
    -124.424675,
    42.369954,
    -124.418993,
    42.382157
  ],
  [
    -124.416595,
    42.290644,
    -124.406157,
    42.305181
  ],
  [
    -124.408023,
    42.283481,
    -124.405668,
    42.284013
  ],
  [
    -124.412523,
    42.251256,
    -124.396548,
    42.278211
  ],
  [
    -124.388332,
    42.087841,
    -124.329302,
    42.232948
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
* @returns HUM_State_Parks_Parking_Lot_Trends_2002_2018[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): HUM_State_Parks_Parking_Lot_Trends_2002_2018[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns HUM_State_Parks_Parking_Lot_Trends_2002_2018[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): HUM_State_Parks_Parking_Lot_Trends_2002_2018[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns HUM_State_Parks_Parking_Lot_Trends_2002_2018[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): HUM_State_Parks_Parking_Lot_Trends_2002_2018[] {
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
