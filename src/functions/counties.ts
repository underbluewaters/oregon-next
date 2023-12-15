import { Feature, MultiPolygon, Polygon } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import { countyBBoxes } from "../data/county-bboxes";
import booleanOverlap from "@turf/boolean-overlap";
import booleanWithin from "@turf/boolean-within";
import bboxPolygon from "@turf/bbox-polygon";

export function adjacentCounties(sketch: Feature<Polygon | MultiPolygon>) {
    const boundingBox = bbox(sketch) as [number, number, number, number];
    const bboxPoly = bboxPolygon(boundingBox);
    const counties = [];
    for (const feature of countyBBoxes.features) {
      if (booleanOverlap(bboxPoly, feature) || booleanWithin(bboxPoly, feature)) {
        counties.push(feature.properties.COUNTY_NAM);
      }
    }
    return counties;
}