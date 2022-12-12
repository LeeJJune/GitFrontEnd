$(document).ready(function(){
    // let a=$('.menu_sub_menu>p');

    // $('.menu_sub_menu').hide(),

    $('.menu_main a').hover(
        function(){
        $(this).find('.menu_sub_ul').slideDown();
        $(this).addClass('on');
    },
        function(){
        $(this).find('.menu_sub_ul').slideUp();
        $(this).removeClass('on');
    })

    $('.menu_sub_menu').mouseover(function(){
        
    });
    $('.menu_sub_menu').mouseout(function(){
        
    });
    
});
