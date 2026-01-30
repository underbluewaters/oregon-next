/**
 * @jest-environment node
 * @group smoke
 */
import Handler from "./cmec";
import { isSketchCollection } from "@seasketch/geoprocessing";
import {
  getExamplePolygonSketchAll,
  writeResultOutput
} from "@seasketch/geoprocessing/scripts/testing";

const calculateCMEC = Handler.func;

jest.setTimeout(240000);

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof calculateCMEC).toBe("function");
  });
  test("calculateCMEC - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples.filter((s) => !isSketchCollection(s) && s.properties.name !== "big area")) {
      console.log("running example", example.properties.name);
      console.time(`calculateCMEC ${example.properties.name}`);
      const result = await calculateCMEC(example, {});
      console.timeEnd(`calculateCMEC ${example.properties.name}`);
      expect(result).toBeTruthy();
      // console.log(result);
      writeResultOutput(result, "calculateCMEC", example.properties.name);
    }
  });
});
