import { execa } from 'execa';
import { PropertyInfo } from './utils';

export async function querySpatialProperties(inputFile: string, layerName: string): Promise<PropertyInfo[]> {
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

export async function fetchDistinctValues(inputFile: string, layerName: string, propertyName: string, limit: number): Promise<any[]> {
  const sqlQuery = `SELECT DISTINCT ${propertyName} FROM ${layerName}`;
  const { stdout } = await execa('ogrinfo', ['-dialect', 'SQLite', '-sql', sqlQuery, inputFile]);

  const values = stdout.split('\n')
    .filter(line => line.includes('='))
    .map(line => {
      const parts = line.split('=');
      return parts.length === 2 ? parts[1].trim() : null;
    })
    .filter(value => value !== null) as any[];

  return values.length <= limit ? values : [];
}
