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
  Feature,
  FeatureCollection,
  Geometry
} from "@seasketch/geoprocessing";
import { AnyLayer } from "mapbox-gl";
import makeBbox from "@turf/bbox";
import { BBox } from "@turf/helpers";
import turfArea from "@turf/area";
import { getLayerDetails, extractColorsForCategories } from "./utils";
import precalcs from "../../data/src/substrate-totals.json";
import { rankedProtectedAreas } from "../../data/src/rankedProtectedAreas";
import { createSource, FlatGeobufSource, FeatureWithMetadata } from "../fgb-source/index";
import intersect from "@turf/intersect";
import { GeostatsLayer } from "@seasketch/geostats-types";
import polygonClipping from "polygon-clipping";
import { makeNodeFetchRangeFn } from "./makeNodeFetchRangeFn";
import { fgbFetchAll } from "./fgbFetchAll";

export type Designation = "MR" | "MPA" | "MCA" | "MG" | "SPA" | "MRA";

type Envelope = {
  /** Westernmost coordinate (minimum X) */
  minX: number;
  /** Southernmost coordinate (minimum Y) */
  minY: number;
  /** Easternmost coordinate (maximum X) */
  maxX: number;
  /** Northernmost coordinate (maximum Y) */
  maxY: number;
};


export interface CMECResults {
  /** area of the sketch in square meters */
  area: {
    sketchName: string;
    area: number;
  }[];
  bbox: BBox;
  geostats: GeostatsLayer;
  style: AnyLayer[];
  rankedProtectedAreas: string[];
  precalcs: {
    totals: {
      [classKey: string]: number;
    };
    protectedAreaTotals: {
      [designation: string]: number;
    };
    protectedAreaHabitatTotals: {
      [designation: string]: {
        [classKey: string]: number;
      };
    };
    unprotectedTotals: {
      [classKey: string]: number;
    };
  };
  overlay: {
    [designation: string]: {
      [classKey: string]: number;
    }
  };
  newlyProtectedArea: {
    [designation: string]: {
      [classKey: string]: number;
    }
  }
  colors: {
    [classKey: string]: string;
  };
}

let source: FlatGeobufSource<Feature<Polygon | MultiPolygon, { CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean }>> | null = null;

async function getSource(): Promise<FlatGeobufSource<Feature<Polygon | MultiPolygon, { CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean }>>> {
  if (!source) {
    source = await createSource<any>("https://gp-oregon-next-datasets.s3.us-west-2.amazonaws.com/substrate.fgb", {
      fetchRangeFn: makeNodeFetchRangeFn("https://gp-oregon-next-datasets.s3.us-west-2.amazonaws.com/").fetchRangeFn,
      pageSize: "10MB",
      overfetchBytes: "10MB",
      initialHeaderRequestLength: 8192 * 10
    });
  }
  return source;
}

async function calculateCMEC(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<CMECResults> {
  const source = await getSource();
  const layerDetails = await getLayerDetails("oregon", "MLDbAVTHD");
  const vectorGeostats = layerDetails.geostats as { layers: GeostatsLayer[] };
  const geostatsLayer = vectorGeostats.layers[0];
  const classKeyAttribute = geostatsLayer.attributes.find((a) => a.attribute === "CMECS_SC_C")!;
  const colors = extractColorsForCategories(
    Object.keys(precalcs.totals),
    classKeyAttribute,
    layerDetails.style,
  );
  const overlay: {
    [designation: string]: {
      [classKey: string]: number;
    }
  } = {};
  const newlyProtectedArea: {
    [designation: string]: {
      [classKey: string]: number;
    }
  } = {};
  console.log(`This sketch has ${toSketchArray(sketch).length} features`);
  for (const s of toSketchArray(sketch)) {
    const bbox = makeBbox(s);
    const envelope = {
      minX: bbox[0],
      minY: bbox[1],
      maxX: bbox[2],
      maxY: bbox[3],
    };
    if (!source) {
      throw new Error("Source not found");
    }
    const queryPlan = source.createPlan(envelope);
    const sketchDesignation = getDesignationForSketch(s);
    if (!(sketchDesignation in newlyProtectedArea)) {
      newlyProtectedArea[sketchDesignation] = {};
    }
    console.log(queryPlan);
    const overlappingFeatures: Feature<Polygon | MultiPolygon, { CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean }>[] = [];
    for await (const feature of source.getFeaturesAsync(envelope)) {
      overlappingFeatures.push(feature);
    }
    console.log(`Found ${overlappingFeatures.length} overlapping features`);
    const groupedFeatures = groupFeaturesByDesignationAndClassKey(overlappingFeatures);
    const sketchMultiPolygon = createMultiPolygonFromFeatures([s]);
    for (const designation of [...rankedProtectedAreas, "Unprotected"]) {
      if (groupedFeatures[designation]) {
        overlay[designation] = {};
        for (const classKey in groupedFeatures[designation]) {
          const substrateMultiPolygon = createMultiPolygonFromFeatures(groupedFeatures[designation][classKey].features);
          // const intersection = polygonClipping.intersection(sketchMultiPolygon.coordinates, substrateMultiPolygon.coordinates);
          const intersection = intersect(sketchMultiPolygon, substrateMultiPolygon) as Feature<Polygon | MultiPolygon>;
          
          let areaOverlap = 0;
          if (intersection) {
            areaOverlap = turfArea(intersection);
          }
          if (areaOverlap > 0) {
            if (!overlay[designation][classKey]) {
              overlay[designation][classKey] = 0;
            }
            overlay[designation][classKey] += areaOverlap;
            if (isHigherProtectionLevel(sketchDesignation, designation as unknown as Designation | "Unprotected")) {
              if (!newlyProtectedArea[sketchDesignation][classKey]) {
                newlyProtectedArea[sketchDesignation][classKey] = 0;
              }
              newlyProtectedArea[sketchDesignation][classKey] += turfArea(intersection);
            }
          }
        }
      }
    }
  }






  return {
    colors,
    area: toSketchArray(sketch).map(s => ({
      sketchName: s.properties.name || "",
      area: turfArea(s)
    })),
    bbox: makeBbox(sketch),
    geostats: geostatsLayer,
    style: layerDetails.style,
    rankedProtectedAreas,
    precalcs,
    overlay,
    newlyProtectedArea
  };
}

export default new GeoprocessingHandler(calculateCMEC, {
  title: "calculateCMEC",
  description: "Calculates the Coastal and Marine Ecological Classification for a sketch.",
  timeout: 120, // seconds
  memory: 4096, // megabytes
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: ["designation"],
});


function groupFeaturesByDesignationAndClassKey(features: Feature<Polygon | MultiPolygon, { CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean }>[]) {
  const groupedFeatures: {
    [designation: string]: {
      [classKey: string]: FeatureCollection<Polygon | MultiPolygon>
    }
  } = {};
  for (const feature of features) {
    const designation = getDesignationForFeature(feature) || "Unprotected";
    if (!groupedFeatures[designation]) {
      groupedFeatures[designation] = {};
    }
    const classKey = feature.properties?.CMECS_SC_C;
    if (!classKey) {
      continue;
    }
    if (!groupedFeatures[designation][classKey]) {
      groupedFeatures[designation][classKey] = {
        type: "FeatureCollection",
        features: [],
      };
    }
    groupedFeatures[designation][classKey].features.push(feature);
  }
  return groupedFeatures;
}

function getDesignationForFeature(feature: Feature<Polygon | MultiPolygon, { CMECS_SC_C?: string, MR?: boolean, MCA?: boolean, SPA?: boolean, MPA?: boolean, MG?: boolean, MRA?: boolean }>) {
  for (const designation of rankedProtectedAreas) {
    if (feature.properties?.[designation]) {
      return designation as Designation;
    }
  }
  return null;
}

function createMultiPolygonFromFeatures(features: Feature<Polygon | MultiPolygon>[]): MultiPolygon {
  const multiPolygon = {
    type: "MultiPolygon",
    coordinates: []
  };
  for (const feature of features) {
    if (feature.geometry.type === "MultiPolygon") {
      // @ts-ignore
      multiPolygon.coordinates.push(...feature.geometry.coordinates);
    } else {
      // @ts-ignore
      multiPolygon.coordinates.push(feature.geometry.coordinates);
    }
  }
  return multiPolygon as MultiPolygon;
}

function getDesignationForSketch(sketch: Sketch<Polygon | MultiPolygon>): Designation {
  if (sketch.properties?.designation) {
    if (rankedProtectedAreas.includes(sketch.properties.designation)) {
      return sketch.properties.designation as Designation;
    }
  }
  return rankedProtectedAreas[rankedProtectedAreas.length - 1];
}


/**
 * Returns true if designation1 is a higher protection level than designation2.
 */
function isHigherProtectionLevel(designation1: Designation, designation2: Designation | "Unprotected") {
  if (designation2 === "Unprotected") {
    return true;
  }
  return rankedProtectedAreas.indexOf(designation1) < rankedProtectedAreas.indexOf(designation2);
}