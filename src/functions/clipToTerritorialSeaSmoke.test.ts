/**
 * @jest-environment node
 * @group smoke
 */
import handler, { clipToOcean } from "./clipToTerritorialSea";
import { polygonPreprocessorSmokeTest } from "@seasketch/geoprocessing/scripts/testing";

polygonPreprocessorSmokeTest(clipToOcean, handler.options.title, {
  timeout: 30000,
  debug: true,
});
