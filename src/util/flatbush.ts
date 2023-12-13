const Flatbush = require('flatbush');

/**
 * Returns a flatbush index from data serialized as an array of numbers
 */
export function deserializeIndex(arrayData: Array<number>) {
  // Hacky way of instantiating a new Flatbush without running into instanceof 
  // ArrayBuffer incompatibility (due to using core-js polyfill?)
  // https://github.com/mourner/flatbush/blob/db0c08d458b09f0dc229a22d1d9bc908f485dca9/index.js#L13
  const data = Uint8Array.from(arrayData).buffer;
  const [magic, versionAndType] = new Uint8Array(data, 0, 2);
  const [nodeSize] = new Uint16Array(data, 2, 1);
  const [numItems] = new Uint32Array(data, 4, 1);
  const ARRAY_TYPES = [
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array
  ];
  const index = new Flatbush(numItems, nodeSize, ARRAY_TYPES[versionAndType & 0x0f], data);
  let n = numItems;
  let numNodes = n;
  do {
    n = Math.ceil(n / index.nodeSize);
    numNodes += n;
  } while (n !== 1);
  const nodesByteSize = numNodes * 4 * index.ArrayType.BYTES_PER_ELEMENT;
  index.data = data;
  index._boxes = new index.ArrayType(index.data, 8, numNodes * 4);
  index._indices = new index.IndexArrayType(index.data, 8 + nodesByteSize, numNodes);

  index._pos = numNodes * 4;
  index.minX = index._boxes[index._pos - 4];
  index.minY = index._boxes[index._pos - 3];
  index.maxX = index._boxes[index._pos - 2];
  index.maxY = index._boxes[index._pos - 1];
  return index;
}