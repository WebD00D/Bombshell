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



})
