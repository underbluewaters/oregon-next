import {
  Sketch,
  SketchCollection,
  Polygon,
  MultiPolygon,
  GeoprocessingHandler,
  DefaultExtraParams,
  toSketchArray,
  Feature,
} from "@seasketch/geoprocessing";
import ports from "../data/ports";
import { getDistanceToNearestNeighbors, getNearestNeighbors } from "../util";
import stateParks from "../data/stateParks";
import outfalls from "../data/HUM_Outfalls_NPDES_EPA_2019_BUFFERED_1MILE.json";
import Flatbush from "flatbush";
import makeBBox from "@turf/bbox";
import booleanIntersects from "@turf/boolean-intersects";
import project from "../../project";
import { fgbFetchAll } from "./fgbFetchAll";
import parkAttendance, { HUM_State_Parks_Parking_Lot_Trends_2002_2018 } from "../data/parkAttendance";
import recreation from "../data/recreation";
import buffer from "@turf/buffer";

const outfallsIndex = new Flatbush(outfalls.features.length);
for (const feature of outfalls.features) {
  outfallsIndex.add(...makeBBox(feature) as [number, number, number, number]);
}
outfallsIndex.finish();

export interface HumanUsesResults {
  ports: {
    name: string
    /* Distance from sketch in meters */
    distance: number
  }[]
  stateParks: {
    name: string;
    /* Distance from sketch in meters */
    distance: number;
  }[],
  outfalls: number;
  overlapsResearch: boolean;
  parkAttendance: HUM_State_Parks_Parking_Lot_Trends_2002_2018[];
  recreation: {
    activity: string;
    occurances: number;
  }[]
}





async function humanUses(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<HumanUsesResults> {
  let overlapsResearch = false;
  for (const feature of toSketchArray(sketch)) {
    if (overlapsResearch) {
      break;
    }
    for (const source of ["research-stations", "research-transects", "research-poly", "research-points", "research-lines"].reverse()) {
      if (overlapsResearch) {
        break;
      }
      const url = `${project.dataBucketUrl()}${source}.fgb`;
      const features = (await fgbFetchAll(url, sketch.bbox || makeBBox(feature))) as Feature<Polygon>[];
      for (const f of features) {
        if (booleanIntersects(feature, f)) {
          overlapsResearch = true;
          break;
        }
      }
    }
  }

  const recreationCounts: {[name: string]: number} = {};
  for (const zone of toSketchArray(sketch)) {
    // Buffering 100 meters to capture "nearby" activities
    const data = recreation.intersects(buffer(zone, 100, {units: "meters"}));
    for (const row of data) {
      if (!recreationCounts[row.NAME]) {
        recreationCounts[row.NAME] = 0;
      }
      recreationCounts[row.NAME]++;
    }
  }

  const results: HumanUsesResults = {
    ports: getDistanceToNearestNeighbors(sketch, 3, ports, "Name").map((r) => {
      return { name: r.Name, distance: r.distance }
    }),
    stateParks: getDistanceToNearestNeighbors(sketch, 3, stateParks, "NAME").map((r) => {
      return { name: r.NAME, distance: r.distance }
    }),
    outfalls: outfallsIndex.search(...makeBBox(sketch) as [number, number, number, number]).filter((idx) => {
      const feature = outfalls.features[idx];
      if (!feature) {
        return false;
      }
      for (const singleSketch of toSketchArray(sketch)) {
        const doesIntersect = booleanIntersects(singleSketch, feature as Feature<Polygon | MultiPolygon>);
        if (doesIntersect) {
          return true;
        }
      }
      return false;
    }).length,
    overlapsResearch,
    parkAttendance: getNearestNeighbors(sketch, 3, parkAttendance, "NAME"),
    recreation: Object.keys(recreationCounts).map((name) => {
      return { activity: name, occurances: recreationCounts[name] }
    })
  };
  return results;
}

export default new GeoprocessingHandler(humanUses, {
  title: "humanUses",
  description: "Human use stats for a sketch",
  timeout: 30, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
