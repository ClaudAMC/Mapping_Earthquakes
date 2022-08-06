// Add console.log to check to see if our code is working.

console.log("working")

// Create a map object with a center and zoom level

// let map = L.map('mapid').setView([40.7, -94.5], 4);

let map = L.map("mapid", {
    center:[
        30, 30
    ],
    zoom: 2
});

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ClaudAMC/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>" + feature.properties.faa + "</h2>");
    }
  }).addTo(map)
});




// // Add GeoJSON data.
// let sanFranAirport ={
//     "type":"FeatureCollection","features":[{
//         "type":"Feature",
//         "properties":{
//             "id":"3469",
//             "name":"San Francisco International Airport",
//             "city":"San Francisco",
//             "country": "United States",
//             "faa":"SFO",
//             "icao":"KSFO",
//             "alt":"13",
//             "tz-offset":"-8",
//             "dst":"A",
//             "tz":"America/Los_Angeles"},
//             "geometry":{
//                 "type":"Point",
//                 "coordinates":[-122.375,37.61899948120117]
//         }
//     }
// ]};

//Grabbing our GeoJSON data. - use the pointToLayer: function
// L.geoJSON(sanFranAirport,{
//     pointToLayer: function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2>"+"<hr>" + "<p>" + feature.properties.city + ", " + feature.properties.country + "</p>");
//     }
// }).addTo(map);

// // Grabbing our GeoJSON data. - use the onEachFeature: function
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + feature.properties.name + "</h2>"+"<hr>" + "<p>" + feature.properties.city + ", " + feature.properties.country + "</p>");
//     }
// }).addTo(map);