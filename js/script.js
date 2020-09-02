
// /*global $*/
// 'use strict';


// /*--------------------------------
//   * スマホ横向き
// ---------------------------------*/

// $(window).on('load resize', function () {
//   var w = $(window).width();
//   var x = 768;
//   if (w < x) {
//     //画面サイズが768px未満のときの処理
    
//     $(window).on('load orientationchange resize', function () {
//       if (Math.abs(window.orientation) === 90) {
//         // 横向きになったときの処理
//         $('#rotate').show(); 
//       } else {
//         // 縦向きになったときの処理
//         $('#rotate').hide();
//       }
//     });
    
//   } else {
//     //それ以外のときの処理
//    ;
//   }
// });


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

  $('#menu-bar').click(function () {
    $(this).toggleClass('active');
    $('#nav').fadeToggle(500);
  });
});

$(function () {
  $("#message-link").click(function () {
    $('#nav').fadeToggle();//開いているnav閉じる
    $('#menu-bar').removeClass('active');//btnについてる.activeのclassをはずす
    $('body').removeClass('fixed');//bodyについてる.fixedのclassはずす
  }); 
});


  
  var state = false;
  var scrollpos;

  $('#menu-bar').click(function () {
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $('#menu-bar').addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $('#menu-bar').removeClass('open');
      state = false;
    }
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



// /*--------------------------------
//   * 背景固定部分
// ---------------------------------*/
// $(function () {
//   var target1 = $("#parallax-bg");
//   var targetPosOT1 = target1.offset().top;
//   var targetFactor = 0.4;
//   var windowH = $(window).height();
//   var scrollYStart1 = targetPosOT1 - windowH;
//   $(window).on('scroll',function(){
//     var scrollY = $(this).scrollTop();
//     if(scrollY > scrollYStart1){
//       target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
//     }else{
//       target1.css('background-position','center top');
//     }
//   });
// });



// /*--------------------------------
//   * 講師紹介more
// ---------------------------------*/
// $(function(){
//   $(".readmore-01").click(function() {
//     $(this).toggleClass("on-click");
//     $(".hide-text_01").slideToggle(1000);
//   });
// });

// $(function(){
//   $(".readmore-02").click(function() {
//     $(this).toggleClass("on-click");
//     $(".hide-text_02").slideToggle(1000);
//   });
// });

// $(function(){
//   $(".readmore-03").click(function() {
//     $(this).toggleClass("on-click");
//     $(".hide-text_03").slideToggle(1000);
//   });
// });



// /*--------------------------------
//   * ページ内リンク位置調整
// ---------------------------------*/
// $(function(){

//   $('a[href^="#"]').not('#menu-bar').click(function() {
//     event.preventDefault();
//     var adjust = -80;// 移動先を下にずらす
//     var speed = 500; // ミリ秒 // スクロールの速度
//     var href= $(this).attr('href');
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top + adjust;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });


//$(window).on('load', function() {
//  var url = $(location).attr('href');
//  if(url.indexOf("?id=") != -1){
//    var id = url.split("?id=");
//    var $target = $('#' + id[id.length - 1]);
//    if($target.length){
//      var pos = $target.offset().top;
//      $("html, body").animate({scrollTop:pos}, 1500);
//    }
//  }
//});


// /*--------------------------------
//   * faqアコーディオン
// ---------------------------------*/
// $(function (){
//   $('.js-accordion-title').click(function() {
//     event.preventDefault();
//     /*クリックでコンテンツを開閉*/
//     $(this).next().slideToggle(200);
//     /*矢印の向きを変更*/
//     $(this).toggleClass('open', 200);
//   });
// });



  

