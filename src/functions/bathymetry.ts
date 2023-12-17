import {
  Sketch,
  SketchCollection,
  Feature,
  GeoprocessingHandler,
  Polygon,
  toSketchArray,
  getCogFilename,
} from "@seasketch/geoprocessing";
import { loadCogWindow } from "@seasketch/geoprocessing/dataproviders";
import bbox from "@turf/bbox";
import { min, max, mean } from "simple-statistics";
import project from "../../project";

// @ts-ignore
import geoblaze, { Georaster } from "geoblaze";

interface BathyStats {
  /** minimum depth in meters */
  min: number;
  /** maximum depth in meters */
  max: number;
  /** avg depth in meters */
  mean: number;
  sketchName: string;
}

export type BathymetryResults = BathyStats[];

export async function bathymetry(
  sketch: Sketch<Polygon> | SketchCollection<Polygon>
): Promise<BathymetryResults> {
  const sketches = toSketchArray(sketch);
  const box = sketch.bbox || bbox(sketch);
  const url = `${project.dataBucketUrl()}${getCogFilename(
    project.getInternalRasterDatasourceById("bathy")
  )}`;
  const results: BathymetryResults = [];
  for (const sketch of sketches) {
    const raster = await loadCogWindow(url, {
      windowBox: box,
    });
    const stats = geoblaze.stats(raster, sketch, {
      calcMax: true,
      calcMean: true,
      calcMin: true,
    })[0];
    results.push({
      min: stats.max > 0 ? 0 : Math.abs(stats.max),
      max: Math.abs(stats.min),
      mean: Math.abs(stats.mean),
      sketchName: sketch.properties.name
    })
  }
  return results;
}

export default new GeoprocessingHandler(bathymetry, {
  title: "bathymetry",
  description: "calculates bathymetry within given sketch",
  timeout: 60, // seconds
  executionMode: "async",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
  memory: 8192,
});