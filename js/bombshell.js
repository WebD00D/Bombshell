$(document).ready(function(){


  //initilizers
  Parse.initialize("6lwXuEam4Zl0heDrMSPQtRx2xcaLM792aRNjw1gF", "hvatZD2xQvA6mmL77SDQsc9T6kqrqLo8PbUmDswC");
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('select').material_select();


  $(".footerlink").mouseover(function(){
    $(this).removeClass("pink-text").addClass("white-text");
  })
  $(".footerlink").mouseout(function(){
    $(this).removeClass("white-text").addClass("pink-text");
  })

  $(".social").mouseover(function(){
    $(this).removeClass("pink-text").addClass("white-text");
  })
  $(".social").mouseout(function(){
    $(this).removeClass("white-text").addClass("pink-text");
  })


  $(".card").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).addClass("z-depth-5");
  })
  $(".card").mouseout(function(){
    $(this).removeClass("z-depth-5");
  })

  $("#weddingBlock").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://wowvipevents.com/wp-content/uploads/2015/02/image4.jpg)");
    $(this).css("background-size","cover")
  })
  $("#weddingBlock").mouseout(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://wowvipevents.com/wp-content/uploads/2015/02/image4.jpg)");
    $(this).css("background-size","cover")
  })

  $("#blogBlock").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://www.weddingsalon.com/blog/wp-content/uploads/2012/03/112.jpg)");
    $(this).css("background-size","cover")
  })
  $("#blogBlock").mouseout(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://www.weddingsalon.com/blog/wp-content/uploads/2012/03/112.jpg)");
    $(this).css("background-size","cover")
  })

  $("#blogBlock").click(function(){
    window.location.href = "https://ilovebombshellblog.wordpress.com/";
  })

  $("#partyBlock").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://www.weddingsalon.com/blog/wp-content/uploads/2012/03/112.jpg)");
    $(this).css("background-size","cover")
  })
  $("#partyBlock").mouseout(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://www.weddingsalon.com/blog/wp-content/uploads/2012/03/112.jpg)");
    $(this).css("background-size","cover")
  })

  $("#partyBlock").click(function(){
    window.location.href= "Parties.html";
  })

  $("#storyBlock").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://2h9fw6visbn2ilapl18sowp1.wpengine.netdna-cdn.com/wp-content/uploads/2015/01/videoshoot10.jpg)");
    $(this).css("background-size","cover")
  })
  $("#storyBlock").mouseout(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://2h9fw6visbn2ilapl18sowp1.wpengine.netdna-cdn.com/wp-content/uploads/2015/01/videoshoot10.jpg)");
    $(this).css("background-size","cover")
  })

  $("#bookingBlock").mouseover(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://www.varji.com/assets/images/backgrounds/salon.jpg)");
    $(this).css("background-size","cover")
  })
  $("#bookingBlock").mouseout(function(){
    $(this).css("cursor","pointer");
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://www.varji.com/assets/images/backgrounds/salon.jpg)");
    $(this).css("background-size","cover")
  })

  $("#bookingBlock").click(function(){
    window.location.href= "BookingLocation.html";
  })

  $(".storytile").click(function(){
    window.location.href= "story.html";
  })
  $(".service_img").mouseover(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-7f8608f5-4a20-4f39-b35e-a1181ceb7c20-Kaitlyn_Bombshell_1.jpg)");
    $(this).css("background-size","cover");
  })
  $(".service_img").mouseout(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-7f8608f5-4a20-4f39-b35e-a1181ceb7c20-Kaitlyn_Bombshell_1.jpg)");
    $(this).css("background-size","cover");
  })

  $("#serviceTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $("#serviceTile").click(function(){
    window.location.href= "ServiceLocation.html";
  })

  $(".specialsTile").mouseover(function(){
    $(this).css("cursor","pointer");
  })
  $(".specialsTile").click(function(){
    window.location.href= "SpecialsLocation.html";
  })
  $("#specialsBlock").mouseover(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-9b5f4f11-de46-4efc-b6d2-e548ca4f243a-SunBum.jpg)");
    $(this).css("background-size","cover");
  })
  $("#specialsBlock").mouseout(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-9b5f4f11-de46-4efc-b6d2-e548ca4f243a-SunBum.jpg)");
    $(this).css("background-size","cover");
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
  window.location.href= "GiftCardLocation.html";
  })
  $(".giftcard_img").mouseover(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.1),rgba(01,01,01,0.1)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-76ac575e-b948-4c05-9499-b1e0daf6d9bc-Bombshell_GiftCards.jpg)");
    $(this).css("background-size","cover");
  })
  $(".giftcard_img").mouseout(function(){
    $(this).css("background","linear-gradient(rgba(01,01,01,0.5),rgba(01,01,01,0.5)),url(http://files.parsetfss.com/69cc1ebe-f693-4f84-ae97-93438bf7ac31/tfss-76ac575e-b948-4c05-9499-b1e0daf6d9bc-Bombshell_GiftCards.jpg)");
    $(this).css("background-size","cover");
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
  $("#weddingBlock").click(function(){
    window.location.href= "Weddings.html";
  })



})
