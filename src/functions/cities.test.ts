import { Feature, Polygon } from "@seasketch/geoprocessing";
import { nearestCities } from "./cities";
import { testPolygon } from "../data/citySearchTestPolygon";

/**
 * @jest-environment node
 * @group unit
 */
describe("Nearest Cities", () => {
  test("Returns some cities", () => {
    const cities = nearestCities(testPolygon);
    expect(cities.length).toBeGreaterThan(0);
    expect(cities.length).toBeLessThanOrEqual(3);
  });

  test("Returns the correct cities", () => {
    console.time("nearestCities");
    const cities = nearestCities(testPolygon);
    console.timeEnd("nearestCities");
    expect(cities).toContain("Brookings");
    expect(cities).toContain("Gold Beach");
    expect(cities).toContain("Port Orford");
    expect(cities[2]).toBe("Port Orford");
  });
});

