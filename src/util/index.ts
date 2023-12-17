import { Feature } from "@seasketch/geoprocessing";

export function groupByProperty<T extends Feature>(features: T[], property: string) {
  return features.reduce((acc, cur) => {
    if (!cur.properties || !(property in cur.properties)) {
      return acc;
    }
    if (!acc[cur.properties[property]]) acc[cur.properties[property]] = [];
    acc[cur.properties[property]].push(cur);
    return acc;
  }, {} as { [propValue: string]: T[] });
}