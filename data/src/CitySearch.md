# Nearest City Search

This project needs a list of the 3 closest cities. A perfectly accurate 
but naive implementation would mean calculating the true distance from the 
sketch polygon to each city and ranking them. Calculating that distance isn't 
just a matter of centroid to centroid, since cities and especially sketches can
vary a lot in size. It would mean creating exploded line segments for all 
polygons and doing a point-to-line calculation. This would be very, very slow 
and I'm not aware of any javascript libraries that even make this process easy 
to write.

In our toolbox we have a useful spatial index in
[flatbush](https://github.com/mourner/flatbush), which enables us to do
efficient knn search from a point to a set of bounding boxes. The spatial index
can be pre-computed so that many knn queries can be done quite efficiently. 

The general process of the algorithm will be as follows:

  1. Simplify the sketch in a way that preserves the general shape but reduces 
     the number of points
  2. For each point, run the flatbush neighbor search for the 3 closest cities,
     tracking how often each city is found. This spatial index is already built
     and stored in a compact format so this process is very efficient. 
  3. Rank cities by their number of occurances in the searches, and pick the 3
     closest ones.
  4. (Optional) If necessary perform an actual eucludian distance calculation 
     for reporting using slower but more accurate algorithms.

<img width="1024" alt="knn-quantized-polygon" src="https://github.com/underbluewaters/oregon-next/assets/511063/89bc74c6-d350-4432-a2b9-2af637715e28">

# Creating the spatial index

The spatial index can be created at build time and deployed with the
geoprocessing function so that it need not be slowly recreated at runtime. Run
`data/src/buildCityIndex.js` which will put a .bin and .json index into src.


# Performance

In the end, performing the nearest cities search, including polygon 
simplification, takes about ~3ms for 3 cities. This makes it easy to embed with
other operations into a single geoprocessing function.