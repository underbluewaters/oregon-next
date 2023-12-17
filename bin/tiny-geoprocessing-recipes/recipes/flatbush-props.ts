export default function toFlatbushIndexModule(featureData: Record<string, any>[], boundingBoxes: [number, number, number, number][], layerName: string, interfaceString: string) {
  return `
import Flatbush from 'flatbush';

${interfaceString}


const featureData: ${layerName}[] = ${JSON.stringify(featureData, null, 2)};

const boundingBoxes: [number, number, number, number][] = ${JSON.stringify(
    boundingBoxes, null, 2)};

export const index = new Flatbush(featureData.length);

for (const box of boundingBoxes) {
  index.add(...box);
}

index.finish();

/**
 * Perform an indexed bounding box search
 * @param minX 
 * @param minY 
 * @param maxX 
 * @param maxY 
 * @returns 
 */
function search(minX: number, minY: number, maxX: number, maxY: number): ${layerName}[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
 * @returns 
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): ${layerName}[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

export default {
  search,
  neighbors
};
`;
}