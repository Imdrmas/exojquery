/* global $, alert, console */


$(function () {



    $('input').focusin(function(){$(this).css({"border" : "4px solid green", "border-radius" : "50px"});

  });

    $('input').focusout(function(){$(this).css('border','4px solid red');


  });
  });
