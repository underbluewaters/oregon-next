import { readFileSync, writeFileSync } from 'fs';
import bbox from "@turf/bbox";
import calcArea from "@turf/area";
import {FlatGeobufSource, createSource} from "../../src/fgb-source/index";
import { rankedProtectedAreas } from './rankedProtectedAreas';


const totals: {[classKey: string]: number} = {};
const protectedAreaTotals: {[protectedArea: string]: number} = {};
const protectedAreaHabitatTotals: {[protectedArea: string]: {[habitat: string]: number}} = {};

(async () => {
  const source = await createSource<{CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean}>("https://gp-oregon-next-datasets.s3.us-west-2.amazonaws.com/substrate.fgb");
  for await (const feature of source.scanAllFeatures()) {
    if (feature.properties.CMECS_SC_C && feature.properties.CMECS_SC_C.length > 0) {
      if (!totals[feature.properties.CMECS_SC_C]) {
        totals[feature.properties.CMECS_SC_C] = 0;
      }
      totals[feature.properties.CMECS_SC_C] += calcArea(feature);
      for (const protectedArea of rankedProtectedAreas) {
        if (feature.properties[protectedArea]) {
          if (!protectedAreaTotals[protectedArea]) {
            protectedAreaTotals[protectedArea] = 0;
          }
          protectedAreaTotals[protectedArea] += calcArea(feature);
          if (!protectedAreaHabitatTotals[protectedArea]) {
            protectedAreaHabitatTotals[protectedArea] = {};
          }
          if (!protectedAreaHabitatTotals[protectedArea][feature.properties.CMECS_SC_C]) {
            protectedAreaHabitatTotals[protectedArea][feature.properties.CMECS_SC_C] = 0;
          }
          protectedAreaHabitatTotals[protectedArea][feature.properties.CMECS_SC_C] += calcArea(feature);
          continue;
        }
      }
    }
  }

  const unprotectedTotals: {[classKey: string]: number} = {};
  for (const classKey of Object.keys(totals)) {
    unprotectedTotals[classKey] = totals[classKey];
    // subtract the totals for each protected area
    for (const protectedArea of rankedProtectedAreas) {
      if (protectedAreaHabitatTotals[protectedArea] && protectedAreaHabitatTotals[protectedArea][classKey]) {
        unprotectedTotals[classKey] -= protectedAreaHabitatTotals[protectedArea][classKey];
      }
    }
  }

  writeFileSync(`${__dirname}/substrate-totals.json`, JSON.stringify({
    totals,
    protectedAreaTotals,
    protectedAreaHabitatTotals,
    unprotectedTotals,
  }, null, 2));
})();
