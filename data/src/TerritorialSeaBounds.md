# Creating new Territorial Sea Bounds

Originally the reports used HUM_TerritorialSeaPolygon_OCMP_2015 for the main
project "geography" by which all sketches were clipped. This dataset had a few
shortcomings:

  1. It was fairly complex and heavyweight, despite having a very coarse 
     shoreline.
  2. The shoreline was coarse and did not line up with the OSM land boundaries
     shown on the project basemaps.

To resolve these issues I (Chad Burt <chad@underbluewaters.net>) used QGIS to 
create a new territorial sea boundary polygon. 

## Step 1

First I used the editing tools in QGIS to manually remove coastline vertices 
and expand the boundary further onto the land. I was careful to leave all 
seaward linework unmodified, as well as maintaining the existing northern and 
southern boundaries of the state.

Afterwards I used QGIS's simplify tool to simplify boundaries to the nearest 5 
meters since offshore curves where needlessly complex.

<img width="350" src="https://github.com/underbluewaters/oregon-next/assets/511063/6031a7a8-c39c-4e23-ac44-e38766092497">


## Step 2

With this coarse landward boundary I can now clip the shape against a more 
up-to-date shoreline derived from openstreetmap data. I imported the [Daylight OSM coastline](https://daylightmap.org/) dataset into QGIS and applied the difference tool to erase land.

<img width="600" src="https://github.com/underbluewaters/oregon-next/assets/511063/cc8ac2b0-d903-4010-8d5d-ac40dedee89e">

## Step 3

This new polygon still had important differences between it and the original
territorial sea bounds. Major inlets and bays remained in the clipped shape
that were excluded from the original dataset. To resolve these problems I overlaid
the original and new territorial sea and manually removed these waterways.

<img width="842" src="https://github.com/underbluewaters/oregon-next/assets/511063/7ae04d49-cd99-4167-8a16-0e096e24f3c2">

> Water features that were removed are seen above in red. 

# Importing into the geoprocessing project as a Geography

How-to type documentation for geography was very focused on using existing 
global EEZ sources or just a bbox so I was a little confused on how to add my
own shape. Here's what I ended up doing:

  1. Copied my customized TerritorialSea.fgb file to `data/src`. (I'm checking
     in my data files since I'm not using another file sharing tool)
  2. Ran `npm run import:data` to import the vector file into the project
     datasources
  3. Next I modified `geographies.json` to have an entry that matched the new
     data source, disabling the existing "world" entry.
     ```json
     [
      {
        "geographyId": "world",
        "datasourceId": "world",
        "display": "World",
        "groups": [],
        "precalc": false
      },
      {
        "geographyId": "territorial-sea",
        "datasourceId": "territorial-sea",
        "display": "Territorial Sea",
        "groups": [
          "default-boundary"
        ],
        "precalc": true
      }
     ]
     ```

# osm-shoreline.geojson

This shoreline dataset was derived from the new territorial sea explained above
to have a matching shoreline. Process was as follows:

  1. Make a copy of the territorial sea and convert it to a linestring
  2. Convert the multi-linestring to singlepart, and copy the largest line. This
     excludes the small islands.
  3. Using QGIS's vector editing tools, manually delete offshore vertices.

<img width="552" alt="Screenshot 2023-12-14 at 5 14 26 PM" src="https://github.com/underbluewaters/oregon-next/assets/511063/ea0de1b1-78c5-497a-a70b-bb0a092804a3">
