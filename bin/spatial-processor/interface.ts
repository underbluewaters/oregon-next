import { fetchDistinctValues } from './properties';
import { PropertyInfo } from './utils';

export async function generateTypeScriptInterface(
  selectedProperties: string[],
  allProperties: PropertyInfo[],
  inputFile: string,
  layerName: string,
  stringLimit: number,
  numberLimit: number
): Promise<string> {
  let interfaceString = `export interface ${layerName} {\n`;
  for (const propName of selectedProperties) {
    const prop = allProperties.find(p => p.name === propName);
    let tsType = 'any';

    if (prop) {
      const typeLower = prop.type.toLowerCase();

      if (/integer|real|float|double|numeric/.test(typeLower)) {
        tsType = 'number';
        const distinctValues = await fetchDistinctValues(inputFile, layerName, propName, numberLimit);
        if (distinctValues.length > 0 && distinctValues.length <= numberLimit) {
          tsType = distinctValues.join(' | ');
        }
      } else if (/string|text|varchar|char/.test(typeLower)) {
        tsType = 'string';
        const distinctValues = await fetchDistinctValues(inputFile, layerName, propName, stringLimit);
        if (distinctValues.length > 0 && distinctValues.length <= stringLimit) {
          tsType = `'${distinctValues.join("' | '")}'`;
        }
      }
    }

    interfaceString += `  ${propName}: ${tsType};\n`;
  }
  interfaceString += `}`;

  return interfaceString;
}
