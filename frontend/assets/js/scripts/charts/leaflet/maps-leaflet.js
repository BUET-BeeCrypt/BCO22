/*=========================================================================================
    File Name: maps-leaflet.js
    Description: Leaflet Maps.
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {
  $(".maps-leaflet").css({"width": "100%"});
  
  $(".maps-leaflet-container").css({"height": "450px", "width": "100%"});

  // initialize the Marker map
  var mapsLeafletMarker = L.map('maps-leaflet-marker').setView([23.7260602,90.3953405], 20);
  var marker = L.marker([23.7260602,90.3953405], {draggable: true}).addTo(mapsLeafletMarker);
  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mapsLeafletMarker);
  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mapsLeafletMarker);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletMarker);

  
});
