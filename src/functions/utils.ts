// import {
//   BBox,
//   Feature,
//   FeatureCollection,
//   fgbFetchAll,
//   Geometry,
//   isVectorDatasource,
//   MultiPolygon,
//   Point,
//   Polygon,
//   Sketch,
// } from "@seasketch/geoprocessing";
import {
  GeostatsAttribute,
  GeostatsAttributeType,
  GeostatsLayer,
  isRasterInfo,
  NumericGeostatsAttribute,
  RasterInfo,
} from "@seasketch/geostats-types";
import { AnyLayer, CircleLayer } from "mapbox-gl";
// import intersect from "@turf/intersect";
// import {
//   booleanPointInPolygon,
//   featureCollection,
//   bbox as makeBbox,
// } from "@turf/turf";
// import { deserialize } from "flatgeobuf/lib/mjs/geojson.js";
// import { area as calcArea } from "@turf/turf";

export type DataUploadOutput = {
  type:
    | "GeoJSON"
    | "FlatGeobuf"
    | "ZippedShapefile"
    | "PMTiles"
    | "GeoTIFF"
    | "PNG"
    | "XMLMetadata"
    | "NetCDF";
  url: string;
  isOriginal: boolean;
  originalFilename: string;
  size: number;
};

export type SeaSketchLayerDetails = {
  geostats: { layers: GeostatsLayer[] } | RasterInfo;
  style: AnyLayer[];
  outputs: DataUploadOutput[];
  title: string;
  translated_props: any;
};

// export type CategorizedCountResults = {
//   type: "CategorizedCountResults";
//   layerId: string;
//   label: string;
//   counts: {
//     [category: string]: {
//       count: number;
//       primaryColor?: string;
//       label?: string;
//     };
//   };
// };

// export type PresenceCountResults = {
//   type: "PresenceCountResults";
//   layerId: string;
//   label: string;
//   count: number;
// };

// export type PresenceTableValue = {
//   id?: string | number | undefined;
//   [attribute: string]: any;
// };

// export interface PresenceTableResults {
//   values: PresenceTableValue[];
//   type: "PresenceTableResults";
//   layerId: string;
//   label: string;
//   attributes: {
//     attribute: string;
//     type: GeostatsAttributeType;
//   }[];
// }

// export type CategorizedAreaResultsAreaDatapoint = {
//   /** in sq kilometers */
//   area: number;
//   fraction: number;
//   primaryColor?: string;
//   label?: string;
// };

// export type CategorizedAreaResults = {
//   type: "CategorizedAreaResults";
//   layerId: string;
//   label: string;
//   /** total area of the sketch being analyzed, in sq kilometers */
//   totalArea: number;
//   /** sq kilometers */
//   unknownArea: number;
//   unknownFraction: number;
//   areas: {
//     [category: string]: CategorizedAreaResultsAreaDatapoint;
//   };
// };

// export type ContextualizedMeanResults = {
//   type: "ContextualizedMeanResults";
//   layerId: string;
//   label: string;
//   mean: number;
//   min: number;
//   max: number;
//   numMatches: number;
//   histogram: NumericGeostatsAttribute["stats"]["histogram"];
//   d3Palette?: string;
//   paletteReversed?: boolean;
// };

// export type ObservationStatsTableResults = {
//   type: "ObservationStatsTableResults";
//   layerId: string;
//   label: string;
//   mean: number;
//   min: number;
//   max: number;
//   numMatches: number;
//   d3Palette?: string;
//   paletteReversed?: boolean;
// };

// // Save a reference to the original fetch
// const originalFetch = globalThis.fetch;

// let totalBytesFetched = 0;

// globalThis.fetch = async function (input, init) {
//   if (typeof input === "string" && /.fgb$/.test(input)) {
//     console.log("Intercepting FlatGeobuf fetch");
//   } else {
//     return originalFetch(input, init);
//   }
//   const startTime = Date.now();
//   console.log(`Fetching: ${input}`);
//   // log byte-range headers
//   if (init && init.headers && 'Range' in init.headers) {
//     console.log(`Range: ${init.headers['Range']}`);
//   }

//   const response = await originalFetch(input, init);

//   // Wrap the response body to measure downloaded data
//   const contentLength = response.headers.get('content-length');
//   console.log(`Content Length (from headers): ${contentLength || 'unknown'}`);

//   const responseClone = response.clone();
//   let downloadedBytes = 0;

//   if (responseClone.body) {
//     for await (const chunk of responseClone.body) {
//       downloadedBytes += chunk.length;
//     }
//   }

//   console.log(`Total downloaded bytes: ${downloadedBytes}`);
//   console.log(`Fetch duration: ${Date.now() - startTime}ms`);

//   return response;
// };

/**
 * Used to fetch layer details from the SeaSketch API. This includes:
 *
 *   - GeostatsLayer or RasterInfo object with metadata and statistics about the layer
 *   - Mapbox GL style layer objects used to render the layer. This is useful if you want the reports to have matching colors or labels
 *   - DataUploadOutput objects with URLs to access the data in various formats (e.g. GeoJSON, GeoTIFF, FlatGeobuf)
 *
 * @param slug Project "slug" from the SeaSketch project URL
 * @param stableId Unique identifier for the layer, accessible from the SeaSketch table of contents editor
 * @returns SeaSketchLayerDetails object
 */
export async function getLayerDetails(slug: string, stableId: string) {
  if (!process.env.SEASKETCH_API_KEY) {
    throw new Error("SEASKETCH_API_KEY not set");
  }
  const url = `https://api.seasket.ch/layers/${slug}/${stableId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.SEASKETCH_API_KEY}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Failed to fetch layer (${stableId}) details: ${res.statusText}`);
    }
  });
  return response as SeaSketchLayerDetails;
}

// export function createSeaSketchVectorSource(slug: string, stableId: string) {
//   return new SeaSketchVectorSource(slug, stableId);
// }

// class SeaSketchVectorSource {
//   slug: string;
//   stableId: string;
//   details: SeaSketchLayerDetails | null = null;
//   geojson: FeatureCollection | null = null;
//   ready: Promise<true | Error>;

//   constructor(slug: string, stableId: string) {
//     this.slug = slug;
//     this.stableId = stableId;
//     const self = this;
//     this.ready = new Promise<true | Error>((resolve, reject) => {
//       getLayerDetails(slug, stableId)
//         .then((details) => {
//           self.details = details;
//           self
//             .setupSource()
//             .then(() => {
//               resolve(true);
//             })
//             .catch((e) => {
//               reject(e);
//             });
//         })
//         .catch((e) => {
//           reject(e);
//         });
//     });
//   }

//   setupSource = async () => {
//     const details = await this.details;
//     if (details) {
//       if (
//         "layers" in details.geostats &&
//         isGeostatsLayer(details.geostats.layers[0])
//       ) {
//         // setup vector source
//         const geojsonSource = details.outputs.find(
//           (output) => output.type === "GeoJSON",
//         );
//         const fgbSource = details.outputs.find(
//           (output) => output.type === "FlatGeobuf",
//         );
//         if (geojsonSource) {
//           await fetch(geojsonSource.url)
//             .then((res) => {
//               if (res.ok) {
//                 return res.json();
//               } else {
//                 throw new Error(`Failed to fetch GeoJSON: ${res.statusText}`);
//               }
//             })
//             .then((geojson: FeatureCollection) => {
//               this.geojson = geojson;
//             });
//         } else if (fgbSource) {
//           return;
//         }
//       } else {
//         // setup raster source
//         throw new Error("Raster sources not yet supported");
//       }
//     }
//   };

//   async countPresenceByCategory(
//     sketch: Sketch<Polygon | MultiPolygon>,
//     category: string,
//   ): Promise<CategorizedCountResults> {
//     await this.ready;
//     if (!this.details) {
//       throw new Error("Layer details not available");
//     } else if (!("layers" in this.details.geostats)) {
//       throw new Error(
//         "countPresenceByCategory only supported for vector data sources",
//       );
//     }
//     const firstLayer = this.details.geostats.layers[0];
//     const categoryField = firstLayer.attributes.find(
//       (attr) => attr.attribute === category,
//     );
//     if (!categoryField) {
//       throw new Error(`Category field ${category} not found`);
//     }
//     const ready = await this.ready;
//     if (ready instanceof Error) {
//       throw ready;
//     } else {
//       if (
//         firstLayer.geometry === "Point" ||
//         firstLayer.geometry === "MultiPoint"
//       ) {
//         const counts: { [category: string]: number } = Object.keys(
//           categoryField.values,
//         ).reduce(
//           (acc, value) => {
//             acc[value] = 0;
//             return acc;
//           },
//           {} as { [category: string]: number },
//         );
//         for await (const feature of this.overlappingFeatures(sketch)) {
//           if (feature.properties && category in feature.properties) {
//             const categoryValue = feature.properties[category];
//             if (categoryValue in counts) {
//               counts[categoryValue] += 1;
//             }
//           }
//         }
//         const colors = extractColorsForCategories(
//           Object.keys(counts),
//           categoryField,
//           this.details.style,
//         );
//         const categorizedCounts: {
//           [category: string]: {
//             count: number;
//             primaryColor?: string;
//             label?: string;
//           };
//         } = {};
//         for (const category of Object.keys(counts)) {
//           categorizedCounts[category] = { count: counts[category] };
//           if (category in colors) {
//             categorizedCounts[category].primaryColor = colors[category];
//           }
//           const metadataLayer = this.details.style.find(
//             (layer) => "metadata" in layer && layer.metadata["s:legend-labels"],
//           );
//           if (category in categoryField.values) {
//             let label = category;
//             if (
//               metadataLayer &&
//               "metadata" in metadataLayer &&
//               metadataLayer.metadata["s:legend-labels"]?.[label]
//             ) {
//               label = metadataLayer.metadata["s:legend-labels"][label];
//             }
//             categorizedCounts[category].label = label;
//           }
//         }
//         return {
//           counts: categorizedCounts,
//           type: "CategorizedCountResults",
//           layerId: this.stableId,
//           label: this.details.title,
//         };
//       } else {
//         throw new Error(`Unsupported geometry type ${firstLayer.geometry}`);
//       }
//     }
//   }

//   async countPresence(
//     sketch: Sketch<Polygon | MultiPolygon>,
//   ): Promise<PresenceCountResults> {
//     let count = 0;
//     for await (const feature of this.overlappingFeatures(sketch)) {
//       count++;
//     }
//     return {
//       count,
//       layerId: this.stableId,
//       type: "PresenceCountResults",
//       label: this.details!.title,
//     };
//   }

//   async presenceTable(
//     sketch: Sketch<Polygon | MultiPolygon>,
//     options?: { fields?: string[] },
//   ): Promise<PresenceTableResults> {
//     const values: PresenceTableValue[] = [];
//     await this.ready;
//     const details = this.details!;
//     if (isRasterInfo(details.geostats)) {
//       throw new Error("presenceTable not supported for raster data sources");
//     }
//     const layer = details.geostats.layers[0];
//     if (!layer) {
//       throw new Error("No layer found");
//     }
//     for await (const feature of this.overlappingFeatures(sketch)) {
//       if (feature.properties) {
//         const properties: PresenceTableValue["properties"] = {};
//         for (const attr of layer.attributes) {
//           if (
//             attr.attribute in feature.properties &&
//             (!options?.fields || options.fields.includes(attr.attribute))
//           ) {
//             properties[attr.attribute] = feature.properties[attr.attribute];
//           }
//         }
//         values.push({
//           id: feature.id,
//           ...properties,
//         });
//       }
//     }
//     return {
//       values,
//       layerId: this.stableId,
//       type: "PresenceTableResults",
//       label: this.details!.title,
//       attributes: layer.attributes
//         .filter((a) => !options?.fields || options.fields.includes(a.attribute))
//         .map((attr) => ({ attribute: attr.attribute, type: attr.type })),
//     };
//   }

//   async measureAreaByCategory(
//     sketch: Sketch<Polygon | MultiPolygon>,
//     category: string,
//   ): Promise<CategorizedAreaResults> {
//     await this.ready;
//     if (isRasterInfo(this.details!.geostats)) {
//       throw new Error(
//         "measureAreaByCategory not supported for raster data sources",
//       );
//     }
//     const layer = this.details!.geostats.layers[0];
//     if (!layer) {
//       throw new Error("No layer found");
//     }
//     const results: CategorizedAreaResults = {
//       type: "CategorizedAreaResults",
//       layerId: this.stableId,
//       label: this.details!.title,
//       areas: {},
//       totalArea: calcArea(sketch) / 1e6,
//       unknownArea: 0,
//       unknownFraction: 0,
//     };

//     const attr = layer.attributes.find((a) => a.attribute === category);
//     if (!attr) {
//       throw new Error(`Attribute ${category} not found`);
//     }
//     const colors = extractColorsForCategories(
//       Object.keys(attr.values),
//       attr,
//       this.details!.style,
//     );
//     for (const value of Object.keys(attr.values)) {
//       results.areas[value] = { area: 0, fraction: 0 };
//       if (value in colors) {
//         results.areas[value].primaryColor = colors[value];
//       }
//       // add label if available
//       const metadataLayer = this.details!.style.find(
//         (layer) => "metadata" in layer && layer.metadata["s:legend-labels"],
//       );
//       if (value in attr.values) {
//         let label = value;
//         if (
//           metadataLayer &&
//           "metadata" in metadataLayer &&
//           metadataLayer.metadata["s:legend-labels"]?.[label]
//         ) {
//           label = metadataLayer.metadata["s:legend-labels"][label];
//         }
//         results.areas[value].label = label;
//       }
//     }
//     for await (const feature of this.overlappingFeatures(sketch)) {
//       if (feature.properties && category in feature.properties) {
//         const categoryValue = feature.properties[category];
//         if (categoryValue in results.areas) {
//           const intersection = intersect(
//             featureCollection<Polygon | MultiPolygon>([
//               feature as Feature<Polygon | MultiPolygon>,
//               sketch,
//             ]),
//           ) as Feature<Polygon | MultiPolygon>;
//           // @ts-ignore
//           if (intersection !== false && intersection !== null) {
//             const area = calcArea(intersection) / 1e6;
//             results.areas[categoryValue].area += area;
//           }
//         }
//       }
//     }
//     // calculate unknown area
//     const knownArea = Object.values(results.areas).reduce(
//       (acc, area) => acc + area.area,
//       0,
//     );
//     results.unknownArea = results.totalArea - knownArea;
//     // calculate fractions
//     for (const value of Object.keys(results.areas)) {
//       results.areas[value].fraction =
//         results.areas[value].area / results.totalArea;
//     }
//     results.unknownFraction = results.unknownArea / results.totalArea;
//     return results;
//   }

//   async contextualizedMean(
//     sketch: Sketch<Polygon | MultiPolygon>,
//     category: string,
//     options?: {
//       nullValue?: number;
//     },
//   ): Promise<ContextualizedMeanResults> {
//     await this.ready;
//     if (isRasterInfo(this.details!.geostats)) {
//       throw new Error(
//         "measureAreaByCategory not supported for raster data sources",
//       );
//     }
//     const layer = this.details!.geostats.layers[0];
//     if (!layer) {
//       throw new Error("No layer found");
//     }
//     const attr = layer.attributes.find((a) => a.attribute === category);
//     if (!attr) {
//       throw new Error(`Attribute ${category} not found`);
//     }
//     if (attr.type !== "number") {
//       throw new Error(
//         `Attribute ${category} is not a number. Type is ${attr.type}`,
//       );
//     }
//     const metadataLayer = this.details!.style.find(
//       (layer) => "metadata" in layer && layer.metadata["s:legend-labels"],
//     );
//     const metadata = (metadataLayer as CircleLayer)?.metadata || {};

//     const results: ContextualizedMeanResults = {
//       type: "ContextualizedMeanResults",
//       layerId: this.stableId,
//       label: this.details!.title,
//       mean: 0,
//       numMatches: 0,
//       min: attr.min!,
//       max: attr.max!,
//       histogram: (attr as NumericGeostatsAttribute).stats.histogram,
//       d3Palette: metadata["s:palette"],
//       paletteReversed: metadata["s:reverse-palette"],
//     };

//     let sum = 0;
//     for await (const feature of this.overlappingFeatures(sketch)) {
//       if (feature.properties && category in feature.properties) {
//         const categoryValue = feature.properties[category];
//         if (
//           options &&
//           "nullValue" in options &&
//           categoryValue === options.nullValue
//         ) {
//           continue;
//         }
//         if (categoryValue) {
//           sum += categoryValue;
//           results.numMatches++;
//         }
//       }
//     }
//     results.mean = sum / results.numMatches;
//     return results;
//   }

//   async observationStatsTable(
//     sketch: Sketch<Polygon | MultiPolygon>,
//     category: string,
//     options?: {
//       nullValue?: number;
//     },
//   ): Promise<ObservationStatsTableResults> {
//     await this.ready;
//     if (isRasterInfo(this.details!.geostats)) {
//       throw new Error(
//         "measureAreaByCategory not supported for raster data sources",
//       );
//     }
//     const layer = this.details!.geostats.layers[0];
//     if (!layer) {
//       throw new Error("No layer found");
//     }
//     const attr = layer.attributes.find((a) => a.attribute === category);
//     if (!attr) {
//       throw new Error(`Attribute ${category} not found`);
//     }
//     if (attr.type !== "number") {
//       throw new Error(
//         `Attribute ${category} is not a number. Type is ${attr.type}`,
//       );
//     }
//     const metadataLayer = this.details!.style.find(
//       (layer) => "metadata" in layer && layer.metadata["s:legend-labels"],
//     );
//     const metadata = (metadataLayer as CircleLayer)?.metadata || {};

//     const results: ObservationStatsTableResults = {
//       type: "ObservationStatsTableResults",
//       layerId: this.stableId,
//       label: this.details!.title,
//       mean: 0,
//       numMatches: 0,
//       min: Infinity,
//       max: -Infinity,
//       d3Palette: metadata["s:palette"],
//       paletteReversed: metadata["s:reverse-palette"],
//     };

//     let sum = 0;
//     for await (const feature of this.overlappingFeatures(sketch)) {
//       if (feature.properties && category in feature.properties) {
//         const categoryValue = feature.properties[category];
//         if (
//           options &&
//           "nullValue" in options &&
//           categoryValue === options.nullValue
//         ) {
//           continue;
//         }
//         if (categoryValue) {
//           results.min = Math.min(results.min, categoryValue);
//           results.max = Math.max(results.max, categoryValue);
//           results.numMatches++;
//           sum += categoryValue;
//         }
//       }
//     }
//     results.mean = sum / results.numMatches;
//     return results;
//   }


//   async *overlappingFeatures(sketch: Sketch<Polygon | MultiPolygon>) {
//     await this.ready;
//     if (isRasterInfo(this.details!.geostats)) {
//       throw new Error(
//         "overlappingFeatures not supported for raster data sources",
//       );
//     }
//     const layer = this.details!.geostats.layers[0];
//     if (!layer) {
//       throw new Error("No layer found");
//     }
//     if (this.geojson) {
//       for (const feature of this.geojson.features) {
//         if (doesOverlap(layer.geometry, feature, sketch)) {
//           yield feature;
//         }
//       }
//     } else {
//       const fgbOutput = this.details!.outputs.find(
//         (output) => output.type === "FlatGeobuf",
//       );
//       if (!fgbOutput) {
//         throw new Error("No GeoJSON or FlatGeobuf output found");
//       }
//       const bbox = sketch.geometry.bbox || makeBbox(sketch.geometry);
//       const url = fgbOutput.url;
//       for await (const feature of deserialize(url, fgBoundingBox(bbox))) {
//         if (doesOverlap(layer.geometry, feature, sketch)) {
//           yield feature;
//         }
//       }
//     }
//   }
// }

// function doesOverlap(
//   geometryType: GeostatsLayer["geometry"],
//   feature: Feature,
//   sketch: Sketch<Polygon | MultiPolygon>,
// ): boolean {
//   if (geometryType === "Point" || geometryType === "MultiPoint") {
//     return pointOrMultiPointMatches(feature, sketch);
//   } else if (geometryType === "Polygon" || geometryType === "MultiPolygon") {
//     const intersection =
//       intersect(
//         featureCollection<Polygon | MultiPolygon>([
//           feature as Feature<Polygon | MultiPolygon>,
//           sketch,
//         ]),
//       ) !== null;
//     return intersection !== null && intersection !== false;
//   } else {
//     throw new Error(`Unsupported geometry type ${geometryType}`);
//   }
// }

// function pointOrMultiPointMatches(feature: Feature, sketch: Sketch): boolean {
//   if (feature.geometry.type === "Point") {
//     return booleanPointInPolygon(
//       feature.geometry as Point,
//       sketch.geometry as Polygon,
//     );
//   } else if (feature.geometry.type === "MultiPoint") {
//     return feature.geometry.coordinates.some((coord) => {
//       return booleanPointInPolygon(
//         { type: "Point", coordinates: coord },
//         sketch.geometry as Polygon,
//       );
//     });
//   } else {
//     return false;
//   }
// }

const paintPropertiesByPriority = ["fill-color", "circle-color", "line-color"];

export function extractColorsForCategories(
  values: string[],
  categoryField: GeostatsAttribute,
  style: AnyLayer[],
): { [category: string]: string } {
  const colors: { [category: string]: string } = {};
  const attribute = categoryField.attribute;
  // Find a get expression for this attribute within the layers, proceeding
  // through a prioritized list of paint properties
  for (const paintProp of paintPropertiesByPriority) {
    for (const layer of style) {
      if (
        layer.type === "fill" ||
        layer.type === "circle" ||
        layer.type === "line"
      ) {
        if (
          layer.paint &&
          paintProp in layer.paint &&
          Array.isArray((layer.paint as any)[paintProp])
        ) {
          const expression = (layer.paint as any)[paintProp];
          if (expression[0] === "match") {
            let [fname, getExpr, ...cases] = expression;
            cases = cases.slice(0, -1);
            const defaultColor = expression.slice(-1)[0];
            // First, populate colors with the default color
            if (defaultColor) {
              for (const value of values) {
                colors[value] = defaultColor;
              }
            }
            if (getExpr[1] === attribute) {
              for (let i = 0; i < cases.length; i += 2) {
                const caseValue = cases[i];
                const colorValue = cases[i + 1];
                if (values.includes(caseValue)) {
                  colors[caseValue] = colorValue;
                }
              }
            }
          }
        }
      }
    }
  }
  return colors;
}

// export function fgBoundingBox(box: BBox) {
//   return {
//     minX: box[0],
//     maxX: box[2],
//     minY: box[1],
//     maxY: box[3],
//   };
// }

// // buildResult
// // takes an object listing promises by key, and returns a new object that is
// // keyed by the same keys, but with the resolved values after awaiting all
// // operations with Promise.all.
// export function buildResult<T>(options: { [key: string]: Promise<any> }) {
//   return Promise.all(Object.values(options)).then((values) => {
//     return Object.keys(options).reduce(
//       (acc, key, i) => {
//         // @ts-ignore
//         acc[key] = values[i];
//         return acc;
//       },
//       {} as { [key: string]: any } as T,
//     );
//   });
// }

function isGeostatsLayer(
  layer: GeostatsLayer | RasterInfo,
): layer is GeostatsLayer {
  return "geometry" in layer;
}