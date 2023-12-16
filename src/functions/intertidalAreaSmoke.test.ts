import Hander, { intertidalArea } from './intertidalArea';
import testPolygon from '../../examples/sketches/SeaSide.json';
import { Polygon, Sketch } from '@seasketch/geoprocessing';
import { getExamplePolygonSketchAll, writeResultOutput } from '@seasketch/geoprocessing/scripts/testing';

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
      writeResultOutput(result, 'intertidalArea', example.properties.name);
    }
  });
});

/**
 * @jest-environment node
 * @group smoke
 */
describe('Intertidal Area', () => {
  test('Returns a result', async () => {
    const results = await intertidalArea(testPolygon as Sketch<Polygon>);
    expect(results).toBeTruthy();
    expect(Math.round(results.area * 0.000247105)).toBe(117);
  });
});