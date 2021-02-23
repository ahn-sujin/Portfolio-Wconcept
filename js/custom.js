$(function(){

    var win_w = $(window).width();
    $(window).on('resize',function(){
        win_w = $(this).width();
    });

/*----------gnb-------------------------------------------------------*/

    $('#gnb .left>li').on('mouseenter',function(){
        $(this).children('.sub_wrap').stop(true,true).slideDown();
    });

    $('#gnb .left>li').on('mouseleave',function(){
        $(this).children('.sub_wrap').stop(true,true).slideUp();
    });



});