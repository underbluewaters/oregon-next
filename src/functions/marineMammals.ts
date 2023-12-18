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
} from "@seasketch/geoprocessing";
import stellerSeaLion from "../data/stellerSeaLion";
import caSealions from "../data/californiaSealions"
import elephantSeals from "../data/elephantSeals";
import harborSeals from "../data/harborSeals";


export interface MarineMammalResults {
  haulouts: {
    "Steller Sea Lions": number,
    "California Sea Lions": number,
    "Northern Elephant Seals": number,
    "Pacific Harbor Seals": number
  }
}

async function marineMammals(
  sketch:
    | Sketch<Polygon | MultiPolygon>
    | SketchCollection<Polygon | MultiPolygon>,
  extraParams: DefaultExtraParams = {}
): Promise<MarineMammalResults> {
  const sketches = toSketchArray(sketch);
  const results: MarineMammalResults = {
    haulouts: {
      "Steller Sea Lions": sketches.reduce((acc, cur) => acc += stellerSeaLion.intersects(cur).length, 0),
      "California Sea Lions": sketches.reduce((acc, cur) => acc += caSealions.intersects(cur).length, 0),
      "Northern Elephant Seals": sketches.reduce((acc, cur) => acc += elephantSeals.intersects(cur).length, 0),
      "Pacific Harbor Seals": sketches.reduce((acc, cur) => acc += harborSeals.intersects(cur).length, 0)
    }
  }
  return results;
}

export default new GeoprocessingHandler(marineMammals, {
  title: "marineMammals",
  description: "Counts of marine mammal haulouts within a sketch.",
  timeout: 30, // seconds
  memory: 1024, // megabytes
  executionMode: "sync",
  // Specify any Sketch Class form attributes that are required
  requiresProperties: [],
});
