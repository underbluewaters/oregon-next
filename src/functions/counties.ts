import { Feature, FeatureCollection, MultiPolygon, Polygon, Sketch, SketchCollection, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import { countyBBoxes } from "../data/county-bboxes";
import booleanOverlap from "@turf/boolean-overlap";
import booleanWithin from "@turf/boolean-within";
import bboxPolygon from "@turf/bbox-polygon";

export function adjacentCounties(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>) {
  const counties = new Set<string>();
  const sketches = toSketchArray(sketch);
  for (const s of sketches) {
    const boundingBox = bbox(s) as [number, number, number, number];
    const bboxPoly = bboxPolygon(boundingBox);
    for (const feature of (countyBBoxes as unknown as FeatureCollection).features) {
      if (feature.properties?.COUNTY_NAM && booleanOverlap(bboxPoly, feature) || booleanWithin(bboxPoly, feature)) {
        counties.add(feature.properties!.COUNTY_NAM);
      }
    }
  }
  return Array.from(counties);
}