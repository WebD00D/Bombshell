$(document).ready(function(){


  //initilizers
  Parse.initialize("6lwXuEam4Zl0heDrMSPQtRx2xcaLM792aRNjw1gF", "hvatZD2xQvA6mmL77SDQsc9T6kqrqLo8PbUmDswC");
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('select').material_select();


  $(".card").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).addClass("z-depth-5");
  })
  $(".card").mouseout(function(){
    $(this).removeClass("z-depth-5");
  })

  $(".storytile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".storytile").click(function(){
    window.location.href= "story.html";
  })

  $(".serviceTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".serviceTile").click(function(){
    window.location.href= "ServiceLocation.html";
  })

  $(".specialsTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".specialsTile").click(function(){
    window.location.href= "SpecialsLocation.html";
  })

  $(".bookingTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".bookingTile").click(function(){
    window.location.href= "google.com";
  })

  $(".giftcardTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".giftcardTile").click(function(){
    window.location.href= "google.com";
  })

  $(".partyTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".partyTile").click(function(){
    window.location.href= "Parties.html";
  })

  $(".blogTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".blogTile").click(function(){
    window.location.href= "google.com";
  })

  $(".weddingTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".weddingTile").click(function(){
    window.location.href= "Weddings.html";
  })



})
