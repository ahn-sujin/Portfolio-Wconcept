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


/*----------swiper------------------------------------------------------*/    
    var swiper = new Swiper('#new .new_swiper', {

        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: true,

        navigation: {
        nextEl: '#new .swiper-button-next',
        prevEl: '#new .swiper-button-prev',
        },
    });

    var swiper = new Swiper('#make .make_swiper', {

        slidesPerView: 7,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
    
        navigation: {
        nextEl: '#make .swiper-button-next',
        prevEl: '#make .swiper-button-prev',
        },

    });

    var swiper = new Swiper('#exclusive .exclu_swiper', {

        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: true,

        navigation: {
        nextEl: '#exclusive .swiper-button-next',
        prevEl: '#exclusive .swiper-button-prev',
        },

    });

    var swiper = new Swiper('#beauty .pick_swiper', {

        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '#beauty .swiper-pagination',
        },

        navigation: {
            nextEl: '#beauty .swiper-button-next',
            prevEl: '#beauty .swiper-button-prev',
        },

    });


});