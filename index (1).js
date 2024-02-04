$(document).ready(function(){

  $("#cvbutton").click(function(){showCV()})
  $("#pubbutton").click(function(){showpubs()})
  $("#homebutton").click(function(){gohome()})


});

function showCV(){
  $(".block4").show(); // show cv iframe
  $(".block2").hide(); // hide bio
  $(".block3").hide(); // hide publications list
}

function showpubs(){
  $(".block3").show(); // show publication list
  $(".block2").hide(); // hide bio
  $(".block4").hide(); // hide cv iframe

}

function gohome(){
  $(".block2").show(); // show bio
  $(".block3").hide(); // hide publication list
  $(".block4").hide(); // hide cv frame 

}
