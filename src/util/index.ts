import { Feature, MultiPolygon, Polygon, Sketch, SketchCollection, toSketchArray } from "@seasketch/geoprocessing";
import simplify from "@turf/simplify";
import {coordAll} from "@turf/meta";
import calcDistance from "@turf/distance";
import bboxPolygon from "@turf/bbox-polygon";
import intersects from "@turf/intersect";

export function groupByProperty<T extends Feature>(features: T[], property: string) {
  return features.reduce((acc, cur) => {
    if (!cur.properties || !(property in cur.properties)) {
      return acc;
    }
    if (!acc[cur.properties[property]]) acc[cur.properties[property]] = [];
    acc[cur.properties[property]].push(cur);
    return acc;
  }, {} as { [propValue: string]: T[] });
}

export function getNearestNeighbors<T extends Record<string, any>>(
  sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>, 
  numMatches=3, 
  index: { neighbors: (x: number, y: number, numMatches: number) => T[], boundingBoxes: [number, number, number, number][], featureData: T[] },
  groupByKey: string
): T[] {
  const sketches = toSketchArray(sketch);
  if (!index.featureData.length) {
    throw new Error("Index is empty")
  }
  const countByKey: {[key: string]: number} = {};
  for (const sketch of sketches) {
    const simplified = simplify(sketch, { tolerance: 0.01 });
    for (const [x, y] of coordAll(simplified)) {
      const neighbors = index.neighbors(x, y, numMatches);
      for (const neighbor of neighbors) {
        if (neighbor[groupByKey] in countByKey) {
          countByKey[neighbor[groupByKey]] += 1;
        } else {
          countByKey[neighbor[groupByKey]] = 1;
        }
      }
    }
  }
  const keys = Object.keys(countByKey);
  keys.sort((a, b) => countByKey[b] - countByKey[a]);
  return keys.slice(0, numMatches).map((key) => index.featureData.find((f) => f[groupByKey] === key) as T);
}

export function getDistanceToNearestNeighbors<T extends Record<string, any>>(
  sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>, 
  numMatches=3, 
  index: { neighbors: (x: number, y: number, numMatches: number) => T[], boundingBoxes: [number, number, number, number][], featureData: T[] },
  groupByKey: string
): (T & {distance: number})[] {
  const nearestNeighbors = getNearestNeighbors(sketch, numMatches, index, groupByKey);
  return nearestNeighbors.map((neighbor) => {
    const points: [number, number][] = [];
    const box = index.boundingBoxes[index.featureData.indexOf(neighbor)];
    if (box[0] === box[2] && box[1] === box[3]) {
      // point feature
      points.push([box[0], box[1]]);
    } else {
      // push points for all 4 corners
      points.push([box[0], box[1]]);
      points.push([box[0], box[3]]);
      points.push([box[2], box[1]]);
      points.push([box[2], box[3]]);
    }
    const distances:number[] = [];
    for (const singleSketch of toSketchArray(sketch)) {
      const simplified = simplify(singleSketch, { tolerance: 0.01 });
      // first, check if the bounding box intersects
      if (intersects(simplified, bboxPolygon(box))) {
        distances.push(0);
        continue;
      }
      for (const [x, y] of coordAll(simplified)) {
        for (const point of points) {
          distances.push(calcDistance(point, [x, y], {units: "meters"}));
        }
      }
    }

    return {
      ...neighbor,
      distance: Math.min(...distances)
    }
  });

}