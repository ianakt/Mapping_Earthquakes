// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// An array containing each city's location, state, and population.
let cities = [{
  location: [40.7128, -74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
},
{
  location: [41.8781, -87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994
},
{
  location: [29.7604, -95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502
},
{
  location: [34.0522, -118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456
},
{
  location: [33.4484, -112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272
}
];

// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);



//  L.circleMarker([34.0522, -118.2437],{
//    radius: 300,
//    color: "black",
//    fillColor: '#ffffal'
//  }).addTo(map);

 // We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'


  // Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });


// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
  L.circleMarker(city.location,{
      radius: city.population/100000,
      color: "yellow",
      fillColor: '#ffffal'
    }).addTo(map);
});


// Get data from cities.js
let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker([34.0522, -118.2437],{
//    radius: 300,
//    color: "black",
//    fillColor: '#ffffal'
//  }).addTo(map);
// });


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});





  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);

  // Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

  // Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);



 
 L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup();
      
     }
});

 // Accessing the airport GeoJSON URL
 let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

 // Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// "geometry": {
//   "type": "MultiPolygon",
//   "coordinates": [
//    [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ],
//    [ [ -122.378, 37.826 ], [ -122.377, 37.830 ], [ -122.369, 37.832 ] ]
// ]

