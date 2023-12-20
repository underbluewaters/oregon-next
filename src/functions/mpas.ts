import { Feature, FeatureCollection, GeoprocessingHandler, MultiPolygon, Polygon, Sketch, SketchCollection, overlapFeatures, toSketchArray } from "@seasketch/geoprocessing";
import bbox from "@turf/bbox";
import project from "../../project";
import seaPlan from "../data/MPA_TerritorialSeaPlan_PartIII_OCMP_2023.json";
import mpas from "../data/MPA_MR_COMP_Boundaries_Simplified.json";
import Flatbush from "flatbush";
import booleanIntersects from "@turf/boolean-intersects";

const allFeatures = {
  type: "FeatureCollection",
  features: []
} as FeatureCollection<Polygon | MultiPolygon, {name: string}>;

for (const feature of mpas.features) {
  allFeatures.features.push({
    ...feature,
    properties: {
      name: feature.properties?.Name
    }
  } as Feature<Polygon | MultiPolygon, {name: string}>);
}

for (const feature of seaPlan.features) {
  allFeatures.features.push({
    ...feature,
    properties: {
      name: feature.properties?.NAME
    }
  } as Feature<Polygon | MultiPolygon, {name: string}>);
}

const index = new Flatbush(allFeatures.features.length);
for (const feature of allFeatures.features) {
  index.add(...bbox(feature) as [number, number, number, number]);
}

index.finish();

export interface OverlappingMPAs {
  mpas: {
    name: string;
  }[]
}

export async function overlappingMPAs(sketch: Sketch<Polygon | MultiPolygon> | SketchCollection<Polygon | MultiPolygon>): Promise<OverlappingMPAs> {
  const sketches = toSketchArray(sketch);
  const names = new Set<string>();
  
  for (const sketch of sketches) {
    let ids = index.search(...bbox(sketch) as [number, number, number, number]);
    for (const id of ids) {
      const feature = allFeatures.features[id];
      if (booleanIntersects(feature, sketch)) {
        names.add(feature.properties!.name);
      }
    }
  }

  return {
    mpas: Array.from(names).map(name => ({name}))
  }
}

export default new GeoprocessingHandler(overlappingMPAs, {
  title: "mpas",
  description: "Calculates overlap with existing mpas",
  timeout: 30, // seconds
  memory: 1024, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});