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
      $('.slider a').eq(0).fadeIn();
      setInterval(function() {
            now = now === ttl ? 0 : now;
            $('.slider a').eq(now += 1).fadeIn();
            $('.slider a').eq(now).fadeOut();
      }, 1500);
});

function fnShowHideModal(param) {
      if (param === 'show') {
            $('.background').removeClass('hide');
      } else {
            $('.background').addClass('hide');
      }
}