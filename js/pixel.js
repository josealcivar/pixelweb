"use strict";

$(function() {
  $('#item01').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#modal_lonas').modal('show');
  });
});


$(function() {
  $('#item02').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#modalviniles').modal('show');
  });
});

$(function() {
  $('#item03').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#modalmicroperforado').modal('show');
  });
});

$(function() {
  $('#item04').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#modalrollup').modal('show');
  });
});

$(function() {
  $('#item05').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#modalsenaletica').modal('show');
  });
});
// funcion para generar el mapa
function initMap() {
  var myLatLng = {
    lat: -2.203477,
    lng: -79.889109
  };

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('google-map'), {
    center: myLatLng,
    zoom: 17
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Pixel Kreative!'
  });
}