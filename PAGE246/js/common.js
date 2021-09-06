$(document).ready(function() {
    // 메뉴열기
    $('.menu-main').on('mouseenter', function() {
        $(this).find('.submenu').addClass('show');
    }).on('mouseleave', function() {
        $(this).find('.submenu').removeClass('show');
    });

    // 슬라이드 
    var now = 0; var ttl = 2;
    function fnSliderAni() {
        $('.slider a').eq(now).fadeOut();
        $('.slider a').eq(now + 1).siblings().fadeIn();
    }
    fnSliderAni();
    setInterval(function() {
        now = now > ttl ? 0 : now;

        $('.slider a').eq(now + 1).fadeIn();
        $('.slider a').eq(now).fadeOut();

        now += 1;
    }, 2800);
});