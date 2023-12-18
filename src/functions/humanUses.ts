import {
  Sketch,
  SketchCollection,
  Polygon,
  MultiPolygon,
  GeoprocessingHandler,
  getFirstFromParam,
  DefaultExtraParams,
  isSketchCollection,
  toSketchArray,
} from "@seasketch/geoprocessing";
import ports from "../data/ports";
import simplify from "@turf/simplify";
import calcDistance from "@turf/distance";


export interface HumanUsesResults {
  ports: {
    name: string
    /* Distance from sketch in meters */
    distance: number
  }[]
}

function getNearestPorts(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>, numMatches=3) {
  const sketches = toSketchArray(sketch);
  const countByPort: { [name: string]: number } = {};
  for (const sketch of sketches) {
    const simplified = simplify(sketch, { tolerance: 0.01 });
    const points: [number, number][] = [];
    // Add coordinates to points array
    if (simplified.geometry.type === "Polygon") {
      // @ts-ignore
      points.push(...simplified.geometry.coordinates[0]);
    } else if (simplified.geometry.type === "MultiPolygon") {
      for (const poly of simplified.geometry.coordinates) {
        // @ts-ignore
        points.push(...poly[0]);
      }
    }  
    for (const point of points) {
      const neighbors = ports.neighbors(point[0], point[1], numMatches);
      for (const port of neighbors) {
        if (port.Name in countByPort) {
          countByPort[port.Name] += 1;
        } else {
          countByPort[port.Name] = 1;
        }
      }
    }
  }
  const keys = Object.keys(countByPort);
  keys.sort((a, b) => countByPort[b] - countByPort[a]);
  return keys.slice(0, numMatches);
}

async function humanUses(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<HumanUsesResults> {
  const results: HumanUsesResults = {
    ports: getNearestPorts(sketch, 3).map((name) => {
      const index = ports.featureData.findIndex((f) => f.Name === name);
      const box = ports.boundingBoxes[index];
      const portLocation = [box[0], box[1]];
      const sketches = toSketchArray(sketch);
      let distance = Infinity;
      for (const sketch of sketches) {
        const simplified = simplify(sketch, { tolerance: 0.01 });
        const points: [number, number][] = [];
        // Add coordinates to points array
        if (simplified.geometry.type === "Polygon") {
          // @ts-ignore
          points.push(...simplified.geometry.coordinates[0]);
        } else if (simplified.geometry.type === "MultiPolygon") {
          for (const poly of simplified.geometry.coordinates) {
            // @ts-ignore
            points.push(...poly[0]);
          }
        }  
        for (const point of points) {
          const d = calcDistance(point, portLocation, {units: "meters"});
          if (d < distance) {
            distance = d;
          }
        }
      }
      return {
        name,
        distance
      }
    })
  }
  return results;
}

export default new GeoprocessingHandler(humanUses, {
  title: "humanUses",
  description: "Human use stats for a sketch",
  timeout: 10, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
