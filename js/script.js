$(function(){
    'use strict';
    //BANNER SLIDER
    $('.screen-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
    });

    //VENOBOX
    $('.venobox').venobox(); 

    //COUNTER-UP
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //APP-SCREENSHOT SLIDER
    $('.screen-main').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    //PEOPLE SLIDER
    $('.peoples-image-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        autoplay:true,
        fade: true,
        speed:1500,
        asNavFor: '.peoples-feedback'
      });
      $('.peoples-feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        asNavFor: '.peoples-image-main',
        dots: false,
        fade:true,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        centerMode: true,
        focusOnSelect: true
      });
 }
)