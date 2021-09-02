$(document).ready(function() {
      // 사이드메뉴
      $('.sidemenu-title').on('mouseenter', function() {            
            $(this).find('ul').slideDown(250);
      }).on('mouseleave', function() {            
            $(this).find('ul').slideUp(250);
      });

      // 슬라이드
      var now = 0;
      var ttl = 2;
      $('.slider a').eq(0).siblings().fadeOut();
      setInterval(function() {
            now = now === ttl ? 0 : now += 1;
            $('.slider a').eq(now - 1).fadeOut();
            $('.slider a').eq(now).fadeIn();
      }, 1500);
});

function fnShowHideModal(param) {
      if (param === 'show') {
            $('.background').removeClass('hide');
      } else {
            $('.background').addClass('hide');
      }
}