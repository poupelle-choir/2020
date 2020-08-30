
/*global $*/
'use strict';

/*--------------------------------
  * スマホ横向き
---------------------------------*/
$(window).on('load orientationchange resize', function(){
  if (Math.abs(window.orientation) === 90) {
    // 横向きになったときの処理
    $('#rotate').show();
    
  } else {
    // 縦向きになったときの処理
    $('#rotate').hide();
  }
});


/*--------------------------------
  * ページ切り替え時のフェードイン
---------------------------------*/
$(function () {
  $('body').hide().fadeIn(1300);
});


/*--------------------------------
  * ハンバーガーメニュー
---------------------------------*/
$(function () {

  $('#menu-bar').on('touchstart click', function (event) {
    // touchstart以降のイベントを発生させないように
    event.preventDefault();
    $(this).toggleClass('active');
    $('#nav').fadeToggle(500);
  });
});

$(function () {
  $("#message-link").on('touchstart click', function (event) {
    event.preventDefault();
    $('#nav').fadeToggle();//開いているナビゲーションを閉じる
    $('#menu-bar').removeClass('active');//btnについてる「active」のclassを消す
  }); 
});


/*--------------------------------
  * スクロールでフェードイン
---------------------------------*/
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
      const targetPosition = $(this).offset().top;
      if(scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});



/*--------------------------------
  * 背景固定部分
---------------------------------*/
$(function () {
  var target1 = $("#parallax-bg");
  var targetPosOT1 = target1.offset().top;
  var targetFactor = 0.4;
  var windowH = $(window).height();
  var scrollYStart1 = targetPosOT1 - windowH;
  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();
    if(scrollY > scrollYStart1){
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
    }else{
      target1.css('background-position','center top');
    }
  });
});



/*--------------------------------
  * 講師紹介more
---------------------------------*/
$(function(){
  $(".readmore-01").on('touchstart click', function(event) {
    event.preventDefault();
    $(this).toggleClass("on-click");
    $(".hide-text_01").slideToggle(1000);
  });
});

$(function(){
  $(".readmore-02").on('touchstart click', function(event) {
    event.preventDefault();
    $(this).toggleClass("on-click");
    $(".hide-text_02").slideToggle(1000);
  });
});

$(function(){
  $(".readmore-03").on('touchstart click', function(event) {
    event.preventDefault();
    $(this).toggleClass("on-click");
    $(".hide-text_03").slideToggle(1000);
  });
});



/*--------------------------------
  * ページ内リンク位置調整
---------------------------------*/
$(function(){

  $('a[href^="#"]').not('#menu-bar').on('touchstart click', function(event) {
    event.preventDefault();
    var adjust = -80;// 移動先を下にずらす
    var speed = 500; // ミリ秒 // スクロールの速度
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});



/*--------------------------------
  * faqアコーディオン
---------------------------------*/
$(function (){
  $('.js-accordion-title').on('touchstart click', function(event) {
    event.preventDefault();
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
});



 
