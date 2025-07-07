$(document).ready(function(){

  $("#pubbutton").click(function(){showpubs()})
  $("#projbutton").click(function(){showproj()})
  $("#homebutton").click(function(){gohome()})

});

function showpubs(){
  $(".pub").show(); // show publication list
  $(".intro").hide(); // hide bio
  $(".proj").hide(); // hide projects
    $(".sidebar").hide(); // hide sidebar
}

function showproj(){
  $(".proj").show(); // show projects
  $(".intro").hide(); // hide bio
  $(".pub").hide(); // hide publication list
  $(".sidebar").hide(); // hide sidebar
}


function gohome(){
  $(".intro").show(); // show bio
    $(".sidebar").show(); // show sidebar
  $(".pub").hide(); // hide publication list
  $(".proj").hide(); // hide projects

}

function toggleInfo(id) {
    const infoBox = document.getElementById(id);
    if (infoBox.style.display === "block") {
          infoBox.style.display = "none";
    } else {
          infoBox.style.display = "block";
    }
}
