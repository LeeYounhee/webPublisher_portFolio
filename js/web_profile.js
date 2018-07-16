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

    if ($(window).scrollTop()>=(h*5-779)){
      $(".nav .menu li").removeClass("border");
      $(".nav .menu li:last-child").addClass("border");
    }
  });
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
  $(".hd .x_ic").click(function(){
    $(this).hide();
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
if($(window).width() <= 320) {
  h=$(window).height();
  $("#skill").css("height", h*2-100);
  $("#skill ul").css("height", h+200);
  $("#port").css("height", h+200);
  $(window).resize(function(){
    h=$(window).height();
    $("#skill").css("height", h*2-100);
    $("#skill ul").css("height", h+200);
    $("#port").css("height", h+200);
  });
};
//#port
  $("#port .conbox >div").hover(function(){
    $(this).find(".hide_pf").stop().animate({bottom:"0%"},300);
  },function(){
    $(this).find(".hide_pf").stop().animate({bottom:"-100%"},700);
  });
  if($(window).width() <= 320) {
    h=$(window).height();
    $("#port").css("height", h+200);
    $(window).resize(function(){
      h=$(window).height();
      $("#port").css("height", h+200);
    });
  };
};
