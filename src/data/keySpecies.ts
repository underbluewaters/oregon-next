/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/BIO_Key_Species_Present_Oregon_sites_MARINe_2018.fgb' \
  'src/data/keySpecies.ts' \
  --includeProperties species
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface BIO_Key_Species_Present_Oregon_sites_MARINe_2018 {
  species: 'ulva spp; kornmannia spp; monostroma spp' | 'tegula funebralis' | 'strongylocentrotus purpuratus' | 'saccharina sessilis' | 'pollicipes polymerus' | 'pisaster ochraceus' | 'phyllospadix scouleri' | 'nucella emarginata; nucella ostrina' | 'neorhodomela larix' | 'mytilus californianus' | 'mazzaella cordata; mazzaella splendens' | 'egregia menziesii' | 'bossiella spp' | 'tetraclita rubescens' | 'pelvetiopsis spp' | 'nucella canaliculata' | 'mazzaella spp' | 'lessoniopsis littoralis' | 'fucus spp' | 'acrosiphonia spp; cladophora spp';
}


const featureData: BIO_Key_Species_Present_Oregon_sites_MARINe_2018[] = [
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tetraclita rubescens"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mazzaella spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "mazzaella spp"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "acrosiphonia spp; cladophora spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    124.066033,
    44.7527
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    124.057761,
    44.837069
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    123.972023,
    45.471774
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    123.980496,
    45.918089
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    124.012629,
    45.02573
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    124.084344,
    44.499925
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    124.114274,
    44.24463
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    124.400504,
    43.308912
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    124.438481,
    43.114717
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    124.387983,
    42.228191
  ]
];

export const index = new Flatbush(featureData.length);

for (const box of boundingBoxes) {
  index.add(...box);
}

index.finish();

/**
 * Perform an indexed bounding box search
 * @param minX 
 * @param minY 
 * @param maxX 
 * @param maxY 
* @returns BIO_Key_Species_Present_Oregon_sites_MARINe_2018[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): BIO_Key_Species_Present_Oregon_sites_MARINe_2018[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns BIO_Key_Species_Present_Oregon_sites_MARINe_2018[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): BIO_Key_Species_Present_Oregon_sites_MARINe_2018[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns BIO_Key_Species_Present_Oregon_sites_MARINe_2018[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): BIO_Key_Species_Present_Oregon_sites_MARINe_2018[] {
  const bbox = (feature.bbox || createBBox(feature)) as [number, number, number, number];
  let ids = index.search(...bbox);
  ids.filter((id) => {
    const candidate = bboxPolygon(boundingBoxes[id]);
    return booleanIntersects(feature, candidate);
  });
  return ids.map(id => featureData[id]);
}

export default {
  search,
  neighbors,
  intersects
};
