import { execa } from 'execa';

function parseWKT(wkt: string): number[] {
  // Remove "POLYGON((" and "))" and split by commas to get individual coordinates
  const coordinates = wkt.substring(9, wkt.length - 2).split(',');
  // Extract x and y coordinates and convert them to numbers
  const points = coordinates.map(coord => {
    const [x, y] = coord.trim().split(' ').map(Number);
    return [x, y];
  });

  // Find the min and max values for x and y
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  points.forEach(point => {
    const [x, y] = point;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });

  return [minX, minY, maxX, maxY];
}

export async function fetchFeatureData(inputFile: string, layerName: string, selectedProperties: string[], interfaceName: string, propertyTypes: Record<string, string>) {
  const sqlQuery = `SELECT ${selectedProperties.join(', ')}, ST_AsText(Envelope(ST_Transform(geometry, 4326))) as bbox FROM ${layerName}`;
  const { stdout } = await execa('ogrinfo', ['-dialect', 'SQLite', '-sql', sqlQuery, inputFile]);
  const featureData: Record<string, any>[] = [];
  const boundingBoxes: number[][] = []; // Array to store bounding boxes
  let currentFeature: Record<string, any> = {};

  stdout.split('\n').forEach(line => {
    if (line.includes('OGRFeature')) {
      if (Object.keys(currentFeature).length > 0) {
        featureData.push(currentFeature);
        currentFeature = {};
      }
    } else if (line.includes('=')) {
      const [key, value] = line.split('=').map(part => part.trim());
      // Remove type information from the property names
      const propertyName = key.split(' (')[0];
      if (propertyName === 'bbox') {
        const bbox = parseWKT(value);
        boundingBoxes.push(bbox);
      } else {
        const type = propertyTypes[propertyName].toLocaleLowerCase();
        if (/integer/.test(type)) {
          currentFeature[propertyName] = parseInt(value);
        } else if (/real|float|double|numeric/.test(type)) {
          currentFeature[propertyName] = parseFloat(value);
        } else {
          currentFeature[propertyName] = value;
        }
      }
    }
  });

  // Add the last feature
  if (Object.keys(currentFeature).length > 0) {
    featureData.push(currentFeature);
  }

  return { featureData, boundingBoxes };
}
