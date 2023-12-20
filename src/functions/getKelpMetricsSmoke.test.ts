// import Hander from './getKelpMetrics';
// import testPolygon from '../../examples/sketches/SeaSide.json';
// import { Polygon, Sketch } from '@seasketch/geoprocessing';
// import { getExamplePolygonSketchAll, writeResultOutput } from '@seasketch/geoprocessing/scripts/testing';

// jest.setTimeout(30000);

// /**
//  * @jest-environment node
//  * @group smoke
//  */
// describe('Basic smoke tests', () => {
//   test('handler function is present', () => {
//     expect(typeof Hander.func).toBe('function');
//   });
//   test('tests run against all examples', async () => {
//     const examples = await getExamplePolygonSketchAll();

//     for (const example of examples.slice(0, 1)) {
//       // @ts-ignore
//       const result = await Hander.func(example);
//       expect(result).toBeTruthy();
//       writeResultOutput(result, 'getKelpMetrics', example.properties.name);
//     }
//   });
// });