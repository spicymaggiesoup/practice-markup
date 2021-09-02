$(document).ready(function() {
    $('.menuLi').on('mouseenter', function() {
        $('.menuLi>ul').slideDown().one();
    }).on('mouseleave', function() {
        $('.menuLi>ul').slideUp().one();
    });
});