import yargs from 'yargs';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import { CommandLineOptions } from './utils';
import { generateTypeScriptInterface } from './interface';
import { querySpatialProperties } from './properties';
import { fetchFeatureData } from './features';
import toFlatbushIndexModule from './recipes/flatbush-props';
import bytes from 'bytes'; // Import the bytes module

const DEFAULT_STRING_LIMIT = 50;
const DEFAULT_NUMBER_LIMIT = 5;

export async function main() {
  const argv = yargs(process.argv.slice(2))
    .command('$0 <input> <output>', 'Process spatial data', yargs => {
      yargs
        .positional('input', {
          describe: 'Input spatial file',
          type: 'string'
        })
        .positional('output', {
          describe: 'Output file',
          type: 'string'
        });
    })
    .option('layer', {
      alias: 'l',
      describe: 'Layer name (default: filename without extension)',
      type: 'string',
      default: '', // Default value is an empty string
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
    .option('includeProperties', {
      alias: 'i',
      describe: 'Comma-separated list of properties to include in the TypeScript interface',
      type: 'string'
    })
    .help()
    .alias('help', 'h')
    .parse() as unknown as CommandLineOptions;

  // Determine the default layer name based on the input filename
  const defaultLayerName = path.basename(argv.input, path.extname(argv.input));

  if (!argv.layer || argv.layer === defaultLayerName) {
    argv.layer = defaultLayerName; // Use the default if not specified or equal to the default
  }

  let selectedProperties: string[] = [];
  let properties = await querySpatialProperties(argv.input, argv.layer);

  if (argv.includeProperties) {
    selectedProperties = argv.includeProperties.split(',');
  } else {
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
    selectedProperties = answers.selectedProperties;
  }

  const { interfaceString, propertyTypes } = await generateTypeScriptInterface(
    selectedProperties,
    properties,
    argv.input,
    argv.layer,
    argv.stringLimit,
    argv.numberLimit
  );

  const { featureData, boundingBoxes } = await fetchFeatureData(
    argv.input,
    argv.layer,
    selectedProperties,
    argv.layer,
    propertyTypes
  );

  // Generate the command string with preserved property choices
  const commandArgs = [];
  if (argv.input) commandArgs.push(`'${argv.input}'`);
  if (argv.output) commandArgs.push(`'${argv.output}'`);
  if (argv.stringLimit !== DEFAULT_STRING_LIMIT) commandArgs.push(`--stringLimit ${argv.stringLimit}`);
  if (argv.numberLimit !== DEFAULT_NUMBER_LIMIT) commandArgs.push(`--numberLimit ${argv.numberLimit}`);
  commandArgs.push(`--includeProperties ${selectedProperties.join(",")}`);
  if (argv.layer !== defaultLayerName) commandArgs.push(`--layer '${argv.layer}'`);
  const commandString = `/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \\
  ${commandArgs.join(' \\\n  ')}
*/
`;

  // Combine the interface definition and feature data in a single TypeScript output file
  const outputContent = `${commandString}\n\n${toFlatbushIndexModule(
    featureData,
    boundingBoxes as [number, number, number, number][],
    argv.layer,
    interfaceString
  )}`;

  // Write the combined output to the output file
  if (argv.output) {
    fs.writeFileSync(argv.output, outputContent, 'utf-8');

    // Determine the output file size using the bytes module and log it in a human-readable format
    const stats = fs.statSync(argv.output);
    const fileSizeInBytes = stats.size;
    const fileSizeHumanReadable = bytes(fileSizeInBytes);
    console.log(`Output written to ${argv.output}`);
    console.log(`Output file size: ${fileSizeHumanReadable}`);
  }
}
