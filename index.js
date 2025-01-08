$(document).ready(function(){

  $("#pubbutton").click(function(){showpubs()})
  $("#projbutton").click(function(){showproj()})
  $("#homebutton").click(function(){gohome()})


});

function showpubs(){
  $(".block3").show(); // show publication list
  $(".block2").hide(); // hide bio
  $(".block4").hide(); // hide projects
}

function showproj(){
  $(".block4").show(); // show projects
  $(".block2").hide(); // hide bio
  $(".block3").hide(); // show publication list
}


function gohome(){
  $(".block2").show(); // show bio
  $(".block3").hide(); // hide publication list
  $(".block4").hide(); // hide projects

}

function toggleInfo(id) {
    const infoBox = document.getElementById(id);
    if (infoBox.style.display === "block") {
          infoBox.style.display = "none";
    } else {
          infoBox.style.display = "block";
    }
}
