/* global $, alert, console */
$(function(){

    $("#survol").hover(

      function(){$("#survol").addClass("rouge");},
      function(){$("#survol").removeClass("rouge");});
      // la méthode hover attend 2 function

      $("#classblue").click(function(){
        $("#survol").toggleClass("blue");
      })





});
