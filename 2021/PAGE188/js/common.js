$(document).ready(function() {

    // 왼쪽 사이드메뉴
    function fnToggleShow() { $(this).find('.submenu-ul').toggleClass('show'); }
    $('.menu-ul > li').on('mouseenter', fnToggleShow).on('mouseleave', fnToggleShow);


    // 슬라이더
    var imgs = 2;
    var now = 0;
    var target = $('.slider > a');

    fnSlideShow();
    function fnSlideShow() {
        target.eq(0).siblings().animate({ width: '-800px' });
    };
    setInterval(() => {
        now = now == imgs ? 0 : now += 1;
        target.eq(now - 1).animate({ width: '-800px' });
        target.eq(now).animate({ width: '800px' })
    }, 3000);

    // 탭 activate
    $('.tabs-li').on('click', function() {
        $(this).siblings().toggleClass('active');
        $(this).toggleClass('active');
    });

    // 공지사항 팝업
    $('.notice a').on('click', function() {
        $('.popup-back').attr('style', 'display:block');
    });
});