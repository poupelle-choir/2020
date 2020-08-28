
/*global $*/
'use strict';

//ページ切り替え時のフェードイン//
$(function () {
  
  $('body').hide().fadeIn(1300);
  
});


//ハンバーガーメニュー
$(function () {
  
  $('.menu-btn').on('touchstart click', function (event) {
    // touchstart以降のイベントを発生させないように
    event.preventDefault();
    $(this).toggleClass('active');
    $('.nav').fadeToggle(500);
  });
});


//スクロールでフェードイン
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


//背景固定部分
$(function(){
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
  

//講師紹介more
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
//
//
//ページ内リンク位置調整
$(function(){
  
  $('a[href^="#"]').not('.menu-btn').on('touchstart click', function(event) {
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


$(window).on('load', function() {
  var url = $(location).attr('href');
  if(url.indexOf("?id=") != -1){
    var id = url.split("?id=");
    var $target = $('#' + id[id.length - 1]);
    if($target.length){
      var pos = $target.offset().top;
      $("html, body").animate({scrollTop:pos}, 1500);
    }
  }
});
  
  
//faqアコーディオン
$(function (){
  $('.js-accordion-title').on('touchstart click', function(event) {
    event.preventDefault();
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
});