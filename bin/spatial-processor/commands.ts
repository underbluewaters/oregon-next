import yargs from 'yargs';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import { CommandLineOptions } from './utils';
import { generateTypeScriptInterface } from './interface';
import { querySpatialProperties } from './properties';
import { fetchFeatureData } from './features';

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
      default: '',
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
      describe: 'Comma-separated list of properties to include in the TypeScript interface (overrides interactive choice)',
      type: 'string'
    })
    .help()
    .alias('help', 'h')
    .parse() as unknown as CommandLineOptions;

  if (!argv.layer) {
    argv.layer = path.basename(argv.input, path.extname(argv.input));
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

  const interfaceString = await generateTypeScriptInterface(
    selectedProperties,
    properties,
    argv.input,
    argv.layer,
    argv.stringLimit,
    argv.numberLimit
  );

  const featureData = await fetchFeatureData(argv.input, argv.layer, selectedProperties, 'SpatialData');

  // Combine the interface definition and feature data in a single TypeScript output file
  const outputContent = `${interfaceString}\n\nconst featureData: ${argv.layer}[] = ${JSON.stringify(
    featureData.featureData,
    null,
    2
  )};\n\nconst boundingBoxes: string[] = ${JSON.stringify(
    featureData.boundingBoxes,
    null,
    2
  )};\n\nexport default featureData;\n`;

  // Write the combined output to the output file
  if (argv.output) {
    fs.writeFileSync(argv.output, outputContent, 'utf-8');
    console.log(`Output written to ${argv.output}`);
  }

  // Always print the combined output to the console
  console.log(outputContent);
}
