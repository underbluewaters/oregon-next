import { testPolygon } from "../data/citySearchTestPolygon";
import { adjacentCounties } from "./counties";
const seaside = require("../../examples/sketches/SeaSide.json");

/**
 * @jest-environment node
 * @group unit
 */
describe("Nearest Counties", () => {
  test("Returns some counties", () => {
    const counties = adjacentCounties(testPolygon);
    expect(counties.length).toBeGreaterThan(0);
    expect(counties.length).toBeLessThanOrEqual(3);
  });

  test("Returns the correct counties", () => {
    console.time("counties");
    const counties = adjacentCounties(testPolygon);
    console.timeEnd("counties");
    expect(counties).toContain("CURRY");
    expect(adjacentCounties(seaside)).toContain("CLATSOP");
  });
});

