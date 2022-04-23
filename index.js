$(document).ready(function(){

  $("#cvbutton").click(function(){showCV()})
  $("#pubbutton").click(function(){showpubs()})
  $("#homebutton").click(function(){gohome()})
  $("#links").click(function(){showlinks()})


});

function showCV(){
  $(".block4").show(); // show cv iframe
  $(".block2").hide(); // hide bio
  $(".block3").hide(); // hide publications list
  $(".block5").hide(); // hide links

}

function showpubs(){
  $(".block3").show(); // show publication list
  $(".block2").hide(); // hide bio
  $(".block4").hide(); // hide cv iframe
  $(".block5").hide(); // hide links
}

function gohome(){
  $(".block2").show(); // show bio
  $(".block3").hide(); // hide publication list
  $(".block4").hide(); // hide cv frame
  $(".block5").hide(); // hide links

}

function showlinks(){
  $(".block5").show(); // hide links
  $(".block2").hide(); // show bio
  $(".block3").hide(); // hide publication list
  $(".block4").hide(); // hide cv frame

}
