import {
  PreprocessingHandler,
  Feature,
  Sketch,
  isPolygonFeature,
  ValidationError,
  clipToPolygonFeatures,
  DatasourceClipOperation,
} from "@seasketch/geoprocessing";
import project from "../../project";
import { genClipLoader } from "@seasketch/geoprocessing/dataproviders";

/**
 * Returns the portion of a drawn sketch inside the oregon territorial sea
 */
export async function clipToOcean(
  feature: Feature | Sketch,
  extraParams = {}
): Promise<Feature> {
  if (!isPolygonFeature(feature)) {
    throw new ValidationError("Input must be a polygon");
  }

  const clipToSea: DatasourceClipOperation = {
    datasourceId: "territorial-sea",
    operation: "intersection"
  };

  // Create a function that will perform the clip operations in order
  const clipLoader = genClipLoader(project, [clipToSea]);

  // Wrap clip function into preprocessing function with additional clip options
  return clipToPolygonFeatures(feature, clipLoader, {
    maxSize: 500000 * 1000 ** 2, // Default 500,000 KM
    enforceMaxSize: false,
    ensurePolygon: true,
  });
}

export default new PreprocessingHandler(clipToOcean, {
  title: "clipToOregonTerritorialSea",
  description: "Clips feature the Oregon Territorial Sea, removing land",
  timeout: 40,
  requiresProperties: [],
  memory: 4096,
});
