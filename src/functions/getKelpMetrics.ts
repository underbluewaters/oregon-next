import { Feature, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import { groupByProperty } from "../util";
import calcArea from "@turf/area";
import { KelpYear, yearsForKelpFeature } from "./kelp";

/*
* !!!!!!! IMPORTANT !!!!!!!
* Meant to be run locally once to calculate metrics since I can't use the 
* datasources to split by year
*/


export interface KelpMetrics {
  years: {
    year: KelpYear,
    /* square meters */
    area: number;
  }[]
}

export async function kelpMetrics(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<KelpMetrics> {
  let url = `${project.dataBucketUrl()}kelp-full.fgb`;
  let features = (await fgbFetchAll(url)) as Feature<Polygon>[];
  const acresByYear: { [year: string]: number } = {};
  for (const feature of features) {
    const years = yearsForKelpFeature(feature);
    for (const year of years) {
      if (!acresByYear[year]) {
        acresByYear[year] = 0;
      }
      acresByYear[year] += feature.properties?.ACRESR || 0;
    }
  }
  return {
    years: Object.keys(acresByYear).map((year) => ({
      year: parseInt(year) as KelpYear,
      area: acresByYear[year]
    }))
  };
}

export default new GeoprocessingHandler(kelpMetrics, {
  title: "kelpMetrics",
  description: "Don't run on lambda",
  timeout: 60, // seconds
  memory: 2048, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});