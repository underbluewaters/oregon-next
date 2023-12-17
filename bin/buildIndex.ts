import * as fs from 'fs';
import { execa } from 'execa';
import inquirer from 'inquirer';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import path from 'path';

const DEFAULT_STRING_LIMIT = 50;
const DEFAULT_NUMBER_LIMIT = 5;

interface CommandLineOptions {
  input: string;
  output: string;
  layer?: string;
  stringLimit: number;
  numberLimit: number;
}

interface PropertyInfo {
  name: string;
  type: string;
}

async function querySpatialProperties(inputFile: string, layerName: string): Promise<PropertyInfo[]> {
  const sqlQuery = `SELECT * FROM ${layerName} LIMIT 1`;
  const { stdout } = await execa('ogrinfo', ['-dialect', 'SQLite', '-sql', sqlQuery, inputFile]);

  const geometryTypes = ['geometry', 'geom', 'point', 'linestring', 'polygon', 'multipoint', 'multilinestring', 'multipolygon', 'geometrycollection'];

  return stdout.split('\n')
    .filter(line => {
      const matches = line.match(/^\s*(\w+)\s+\((\w+)\)/);
      return matches && !geometryTypes.includes(matches[2].toLowerCase());
    })
    .map(line => {
      const [name, type] = line.match(/^\s*(\w+)\s+\((\w+)\)/)!.slice(1, 3);
      return { name, type };
    });
}

async function fetchDistinctValues(inputFile: string, layerName: string, propertyName: string, limit: number): Promise<string[]> {
  const sqlQuery = `SELECT DISTINCT ${propertyName} FROM ${layerName}`;
  const { stdout } = await execa('ogrinfo', ['-dialect', 'SQLite', '-sql', sqlQuery, inputFile]);

  const values = stdout.split('\n')
    .filter(line => line.includes('='))
    .map(line => {
      const parts = line.split('=');
      return parts.length === 2 ? parts[1].trim() : null;
    })
    .filter(value => value !== null);

  return values.length <= limit ? values : [];
}

async function main() {
  const argv = yargs(hideBin(process.argv))
    .command('$0 <input> <output>', 'Process spatial data', yargs => {
      yargs
        .positional('input', {
          describe: 'Input spatial file',
          type: 'string'
        })
        .positional('output', {
          describe: 'Output file',
          type: 'string'
        })
    })
    .option('layer', {
      alias: 'l',
      describe: 'Layer name',
      type: 'string'
    })
    .option('stringLimit', {
      alias: 's',
      describe: 'Limit of distinct string values for union types',
      type: 'number',
      default: DEFAULT_STRING_LIMIT
    })
    .option('numberLimit', {
      alias: 'n',
      describe: 'Limit of distinct number values for union types',
      type: 'number',
      default: DEFAULT_NUMBER_LIMIT
    })
    .help()
    .alias('help', 'h')
    .parse() as unknown as CommandLineOptions;

  const inputFile = argv.input;
  const outputFile = argv.output;
  let layerName = argv.layer;

  if (!layerName) {
    layerName = path.basename(inputFile, path.extname(inputFile));
  }

  const properties = await querySpatialProperties(inputFile, layerName);
  const propertyChoices = properties.map(prop => ({ name: `${prop.name} (${prop.type})`, value: prop.name }));

  const questions = [
    {
      type: 'checkbox',
      name: 'selectedProperties',
      message: 'Select properties to keep in output:',
      choices: propertyChoices
    }
  ];

  const answers = await inquirer.prompt(questions);

  const interfaceString = await generateTypeScriptInterface(answers.selectedProperties, properties, inputFile, layerName, argv.stringLimit, argv.numberLimit);
  console.log(interfaceString);
}

async function generateTypeScriptInterface(selectedProperties: string[], allProperties: PropertyInfo[], inputFile: string, layerName: string, stringLimit: number, numberLimit: number): Promise<string> {
  let interfaceString = 'interface SpatialData {\n';
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
  interfaceString += '}';

  return interfaceString;
}

main().catch(error => console.error(error));
