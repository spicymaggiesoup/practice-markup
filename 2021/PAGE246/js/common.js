$(document).ready(function() {
    // 메뉴열기
    $('.menu-main').on('mouseenter', function() {
        $(this).find('.submenu').addClass('show');
    }).on('mouseleave', function() {
        $(this).find('.submenu').removeClass('show');
    });
});