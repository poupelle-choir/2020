

/*--------------------------------
  * スマホ横向き
---------------------------------*/

$(function () {
  $(window).on('load resize', function () {
    var w = $(window).width();
    var x = 768;
    
    if (w < x) {
      //画面サイズが768px未満のときの処理

      $(window).on('load orientationchange resize', function () {
        if (Math.abs(window.orientation) === 90) {
          // 横向きになったときの処理
          $('#rotate').show();
        } else {
          // 縦向きになったときの処理
          $('#rotate').hide();
        }
      });

    } else {
      //それ以外のときの処理
      $('#rotate').hide();
    }
  });

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


var state = false;
$('#menu-bar').on('click', function () {
  event.preventDefault();
  $('#menu-bar').toggleClass('active');
  $('#nav').fadeToggle(500);
  if (state == false){
    $(window).on('touchmove.noScroll', e => {
      e.preventDefault();
    });
    state = true;
  } else {
    $(window).off('.noScroll');
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

/*--------------------------------
  * スクロールしたらエントリーボタン表示（sp/tb）
---------------------------------*/
var entryBtn = $('#entry-btn');
entryBtn.hide();
//最初は非表示


$(function(){
  var w = $(window).width();
  var x = 1024;
  if(w < x){

    $(window).scroll(function () {
      if ($(this).scrollTop()>550){
        entryBtn.fadeIn(500);
      } else {
        entryBtn.fadeOut(500);
      }
    });
  
  }else{
    entryBtn.hide();
  }
  
});


$(function(){
  var w = $(window).width();
  var x = 1024;
  if(w < x){

    //navの中のabout押した時
    $("#message-link").on('click', function () {
      $('#nav').fadeToggle(); //開いているnav閉じる
      $('#menu-bar').toggleClass('active'); //btnについてる.activeはずす
      event.preventDefault();
    });
    
  }else{
  }


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
  $(window).on('scroll', function () {
    var scrollY = $(this).scrollTop();
    if (scrollY > scrollYStart1){
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
    } else {
      target1.css('background-position','center top');
    }
  });
});



/*--------------------------------
  * 講師紹介more
---------------------------------*/
$(function () {
  $(".readmore-01").click(function () {
    $(this).toggleClass("on-click");
    $(".hide-text_01").slideToggle(1000);
  });
});

$(function () {
  $(".readmore-02").click(function () {
    $(this).toggleClass("on-click");
    $(".hide-text_02").slideToggle(1000);
  });
});

$(function () {
  $(".readmore-03").click(function () {
    $(this).toggleClass("on-click");
    $(".hide-text_03").slideToggle(1000);
  });
});



/*--------------------------------
  * ページ内リンク位置調整
---------------------------------*/
$(function () {

  $('a[href^="#"]').not('#menu-bar').click(function () {
    var adjust = -80;// 移動先を下にずらす
    var speed = 500; // ミリ秒 // スクロールの速度
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


/*--------------------------------
  * faqアコーディオン
---------------------------------*/
$(function () {
  $('.js-accordion-title').click(function () {
    event.preventDefault();
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
});





