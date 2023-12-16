import Handler, { rocksAndIslands } from "./rocksAndIslands";
import testPolygon from "../../examples/sketches/SeaSide.json";
import { Polygon, Sketch } from "@seasketch/geoprocessing";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof Handler.func).toBe("function");
  });
  test("tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      // @ts-ignore
      const result = await Handler.func(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "rocksAndIslands", example.properties.name);
    }
  });
});

/**
 * @jest-environment node
 * @group smoke
 */
describe("Rocks and Islands", () => {
  test("Returns a result", async () => {
    const results = await rocksAndIslands(testPolygon as Sketch<Polygon>);
    expect(results).toBeTruthy();
    expect(results.count).toBe(252);
    expect(Math.round(results.area * 0.000247105)).toBe(13);
  });
});

