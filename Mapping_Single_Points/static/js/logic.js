// Add console.log to check to see if our code is working.

console.log("working")

// Create a map object with a center and zoom level

// let map = L.map('mapid').setView([40.7, -94.5], 4);

let map = L.map("mapid", {
    center:[
        40.7, -94.5
    ],
    zoom: 4
});

// Add a marker to the map for Los Anngeles, Cali.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1",
    fillopacity: 0.4
}).addTo(map);

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



