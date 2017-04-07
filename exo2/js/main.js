/* global $, alert, console */

$(document).ready(function() {

  $('#voirMdp').mousedown(function() {

    $('#mdp').attr("type", "text");


});

$('#voirMdp').mouseup(function() {

  $('#mdp').attr("type", "password");


});

$('#voirMdp').mouseleave(function() {

  $('#mdp').attr("type", "password");


});



});
