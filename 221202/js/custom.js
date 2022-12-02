$(document).ready(function () {

    var ht = $(window).height();
    $('#warp>div').height(ht);
   
    $(window).on('resize', function () {
        var ht = $(window).height();
        $('section').height(ht);
    });

    // 마우스 휠 스크롤 이벤트
    $('#warp>div').on('mousewheel', function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({ 'scrollTop': prev }, 1000, 'easeOutExpo');
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $('html, body').stop().animate({ 'scrollTop': next }, 1000, 'easeOutExpo');
        }
    });

});

