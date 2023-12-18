import Hander, { habitats } from './habitats';
import testPolygon from '../../examples/sketches/SeaSide.json';
import { Polygon, Sketch } from '@seasketch/geoprocessing';
import { getExamplePolygonSketchAll, writeResultOutput } from '@seasketch/geoprocessing/scripts/testing';

jest.setTimeout(30000);

describe('Basic smoke tests', () => {
  test('handler function is present', () => {
    expect(typeof Hander.func).toBe('function');
  });
  test('tests run against all examples', async () => {
    const examples = await getExamplePolygonSketchAll();

    for (const example of examples) {
      // @ts-ignore
      const result = await Hander.func(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, 'habitats', example.properties.name);
    }
  });
});

/**
 * @jest-environment node
 * @group smoke
 */
describe('Habitats', () => {
  test('Returns a result', async () => {
    const results = await habitats(testPolygon as Sketch<Polygon>);
    expect(results).toBeTruthy();
    expect(results.intertidal).toBeTruthy();
    expect(results.subtidal).toBeTruthy();
  });
});