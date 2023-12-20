import { GeoprocessingHandler, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import polygonClipping from "polygon-clipping";
import { geomEach } from "@turf/meta";
import calcArea from "@turf/area";
import {
  Feature,
  multiPolygon,
  MultiPolygon,
  polygon,
  Polygon,
  Position,
  Properties,
  FeatureCollection,
} from "@turf/helpers";
import kelpFullMetrics from "../data/kelp-full-metrics.json";

type KelpStatsByYear = {
  year: KelpYear;
  /* Area of kelp in square meters */
  area: number;
  fraction: number;
};

export interface KelpResults {
  /* Area of kelp in acres */
  area: number;
  /* Fraction of the total area of the dataset. 0-1 */
  fraction: number;
  // byYear: KelpStatsByYear[];
}

export async function kelp(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<KelpResults> {
  const sketches = toSketchArray(sketch);
  let totalArea = 0;
  let url = `${project.dataBucketUrl()}kelp.fgb`;
  for (const sketch of sketches) {
    let features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];
    const data = await overlapFeatures("kelp", features, sketch);
    const area = data.reduce((acc, cur) => acc + cur.value, 0);
    totalArea += area;
  }

  const totalAreaPrecalc = project.precalc.find((m) => m.metricId === "area" && m.classId === "kelp-total");
  const datasetTotalArea = totalAreaPrecalc ? totalAreaPrecalc.value : 1;

  // let byYear: KelpStatsByYear[] = [
  //   {
  //     year: 1990,
  //     area: 0,
  //     fraction: 0
  //   },
  //   {
  //     year: 1996,
  //     area: 0,
  //     fraction: 0
  //   },
  //   {
  //     year: 1997,
  //     area: 0,
  //     fraction: 0
  //   },
  //   {
  //     year: 1998,
  //     area: 0,
  //     fraction: 0
  //   },
  //   {
  //     year: 1999,
  //     area: 0,
  //     fraction: 0
  //   },
  //   {
  //     year: 2010,
  //     area: 0,
  //     fraction: 0
  //   }
  // ];

  // url = `${project.dataBucketUrl()}kelp-full.fgb`;
  // for (const sketch of sketches) {
  //   let features = (await fgbFetchAll(url, sketch.bbox || bbox(sketch))) as Feature<Polygon>[];

  //   for (const feature of features) {
  //     //@ts-ignore
  //     const clipped = polygonClipping.intersection(feature.geometry.coordinates, sketch.geometry.coordinates);
  //     let clippedFeature:Feature<Polygon | MultiPolygon> | null = null;
  //     if (clipped.length === 0) {
  //       clippedFeature = null;
  //     } else if (clipped.length === 1) {
  //       clippedFeature = polygon(clipped[0], feature.properties) as Feature<Polygon | MultiPolygon>;
  //     } else {
  //       clippedFeature = multiPolygon(clipped, feature.properties) as Feature<Polygon | MultiPolygon>;
  //     }
  //     if (clippedFeature) {
  //       const years = yearsForKelpFeature(clippedFeature);
  //       for (const year of years) {
  //         const area = calcArea(clippedFeature) * 0.000247105;
  //         byYear.find((y) => y.year === year)!.area += area;
  //       }
  //     }
  //   }
  // }

  // for (const year of byYear) {
  //   year.fraction = year.area / (kelpFullMetrics.years.find((y) => y.year === year.year)?.area || 1);
  // }


  return {
    area: totalArea,
    fraction: totalArea / datasetTotalArea,
    // byYear
  }
}

export type KelpYear = 1990 | 1996 | 1997 | 1998 | 1999 | 2010;

export function yearsForKelpFeature(feature: Feature<Polygon | MultiPolygon>) {
  const years: KelpYear[] = [];
  if (!feature.properties) {
    return years;
  }
  if (feature.properties["KELP90"] !== 0) {
    years.push(1990);
  }
  if (feature.properties["KELP96"] !== 0) {
    years.push(1996);
  }
  if (feature.properties["KELP97"] !== 0) {
    years.push(1997);
  }
  if (feature.properties["KELP98"] !== 0) {
    years.push(1998);
  }
  if (feature.properties["KELP99"] !== 0) {
    years.push(1999);
  }
  if (feature.properties["KELP2010"] !== 0) {
    years.push(2010);
  }
  return years;
}

export default new GeoprocessingHandler(kelp, {
  title: "kelp",
  description: "Calculates overlap with observed kelp",
  timeout: 60, // seconds
  memory: 2048, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});