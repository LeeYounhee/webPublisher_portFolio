window.onload = function() {

//size
  w=$(window).width();
  h=$(window).height();
  $(".start, .start #video, .m_nav").css("width", w);
  $(".start, .start #video, #about, #skill, #port, .ft, .m_nav").css("height", h);
  $("#skill ul").css("height", h-166);
  $(".ft .wrap").css("height", h-100);
  $(window).resize(function(){
    w=$(window).width();
    h=$(window).height();
    $(".start, .start #video, .m_nav").css("width", w);
    $(".start, .start #video, #about, #skill, #port, .ft, .m_nav").css("height", h);
    $("#skill ul").css("height", h-166);
    $(".ft .wrap").css("height", h-100);
  });

//.hd
  $(window).scroll(function(){
    h=$(window).height();

    if ($(window).scrollTop()>=(0)){
      $(".hd").css({"background-color":"rgba(0,0,0,0)"});
      $(".nav .menu li").removeClass("border");
    }

    if ($(window).scrollTop()>=(h-60)){
      $(".hd").css({"background-color":"rgba(0,0,0,.7)"});
      $(".nav .menu li").removeClass("border");
      $(".nav .menu li:first-child").addClass("border");
    }

    if ($(window).scrollTop()>=(h*2-60)){
      $(".nav .menu li").removeClass("border");
      $(".nav .menu li:nth-child(2)").addClass("border");
    }

    if ($(window).scrollTop()>=(h*3-60)){
      $(".nav .menu li").removeClass("border");
      $(".nav .menu li:nth-child(3)").addClass("border");
    }

    if ($(window).scrollTop()>=(h*4-60)){
      $(".nav .menu li").removeClass("border");
      $(".nav .menu li:nth-child(4)").addClass("border");
    }
  });

//#skill
jQuery("#gra").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(22,48,86)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 75, 'time': 1000});

jQuery("#html").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(41,90,163)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 90, 'time': 1000});

jQuery("#css").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(32,69,124)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 85, 'time': 1000});

jQuery("#js").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(22,48,86)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 40, 'time': 1000});

jQuery("#jq").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(41,90,163)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 60, 'time': 1000});

jQuery("#rwd").radialProgress("init", {
  'size': 110,
  'fill': 10,
  'color': "rgb(32,69,124)",
  'background': "rgb(246,244,245)"
}).radialProgress("to", {'perc': 75, 'time': 1000});
//$("#skill .conbox .chart li > div > div:last-child").add("%");

//#port
  $("#port .conbox >div").hover(function(){
    $(this).find(".hide_pf").stop().animate({bottom:"0%"},300);
  },function(){
    $(this).find(".hide_pf").stop().animate({bottom:"-100%"},700);
  });


//rwd
//>=1600px
  if($(window).width() >= 1600) {
  h=$(window).height();
  $("#skill").css("height", h*.9);
  $("#skill ul").css("height", h*.9-166);
  $("#about, #port").css("height", h*.8);
  $(".ft").css("height", h*.6);
  $(".ft .wrap").css("height", h*.6-100);
  $(window).resize(function(){
    h=$(window).height();
    $("#skill").css("height", h*.9);
    $("#skill ul").css("height", h*.9-166);
    $("#about, #port").css("height", h*.8);
    $(".ft").css("height", h*.6);
    $(".ft .wrap").css("height", h*.6-100);
  });
  $(window).scroll(function(){
    h=$(window).height();
    if ($(window).scrollTop()>=(h+h*.8-60)){
    $(".nav .menu li").removeClass("border");
    $(".nav .menu li:nth-child(2)").addClass("border");
  }

  if ($(window).scrollTop()>=(h+h*.8+h*.9-60)){
    $(".nav .menu li").removeClass("border");
    $(".nav .menu li:nth-child(3)").addClass("border");
  }

  if ($(window).scrollTop()>=(h+h*.8+h*.9+h*.4)){
    $(".nav .menu li").removeClass("border");
    $(".nav .menu li:last-child").addClass("border");
  }
  });
};

//<=480px
  if($(window).width() <= 480) {
  $(".hd .menu_ic").show();
  $(".hd .menu_ic").click(function(){
    $(this).hide();
    $(".m_nav").fadeIn();
    $(".hd .x_ic").show();
    $(window).scroll(function(){
      h=$(window).height();
      if ($(window).scrollTop()>=(0)){
        $(".hd").css({"background-color":"rgba(0,0,0,0)"});
      }
    });
  });
  $(".hd .x_ic, .m_nav .m_menu li").click(function(){
    $(".hd .x_ic").hide();
    $(".m_nav").hide();
    $(".hd .menu_ic").show();
    $(".hd").css({"background-color":"rgba(0,0,0,.7)"});
    $(window).scroll(function(){
        h=$(window).height();
        if ($(window).scrollTop()>=(0)){
          $(".hd").css({"background-color":"rgba(0,0,0,0)"});
        }
        if ($(window).scrollTop()>=(h-60)){
          $(".hd").css({"background-color":"rgba(0,0,0,.7)"});
        }
      });
  });
  };
//<=414px
  if($(window).width() <= 414) {
  h=$(window).height();
  $("#port").css("height", h+210);
  $(window).resize(function(){
    h=$(window).height();
    $("#port").css("height", h+210);
  });
};

//<=375px
  if($(window).width() <= 375) {
    h=$(window).height();
    $("#skill").css("height", h+460);
    $("#skill ul").css("height", h+260);
    $(window).resize(function(){
      h=$(window).height();
      $("#skill").css("height", h+460);
      $("#skill ul").css("height", h+260);
    });
    $(window).scroll(function(){
      h=$(window).height();
      if ($(window).scrollTop()>=(h*2+h+400)){
        $("#port .conbox >div").find(".hide_pf").stop().animate({bottom:"0%"},300);
      }
    });
  };
};
