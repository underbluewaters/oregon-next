import { shorelineLength } from './shoreline';
const testSketch = require("../../examples/sketches/SeaSide.json");

/**
 * @jest-environment node
 * @group unit
 */
describe('shorelineLength', () => {
  it('should calculate the correct length of the shoreline', () => {
    console.time("shorelineLength");
    const result = shorelineLength(testSketch);
    console.timeEnd("shorelineLength");
    expect(Math.round(result[0].length)).toBe(19729);
  });
});
