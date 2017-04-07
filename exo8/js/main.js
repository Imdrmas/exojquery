/* global $, alert, console */




  $(document).ready(function(){



      $("button").click(function(){

          // les méthodes fadeIn et fadeOut peuvevt recevoir une
          //fonction en argument (= callback). cette fonction ne se déclanche
          // que lorsque le fadeIn ou la fadeOut est complétement exécuté

         $('#div1').fadeIn(1000).delay(2000).fadeOut(1000)
         $('button').fadeOut(1000).delay(2000).fadeIn(1000)

      });

     });
