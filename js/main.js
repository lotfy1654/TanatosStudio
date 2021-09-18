/*global $, alert, console*/

$(function(){
    'use strict';

    // Trigger Nice Scroll Plugin
    $("html").niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth : 10,
        cursorborderradius: 0,
        cursorborder : '1px solid #f7600e',
    });

    // Change Header Height
    $("header").height($(window).height());
    var hei = ($(window).height()) - ($(".intro").height()),
        heig =  hei / 2
    $(".intro").css({
        "margin-top" : heig ,
        "margin-bottom" : heig/1.6,
        
    })

    // Change Arrow Height
    var he = hei-heig
    $(".arrow").css("padding-top" , he/1.6)
    // console.log(hei/2)

    // Scroll To Features
    $("header .arrow span").click(function(){
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1500)
    })

    $(".hire").click(function(){
        $("html, body").animate({
            scrollTop: $(".our-team").offset().top
        }, 1500)
    })

    $(".work").click(function(){
        $("html, body").animate({
            scrollTop: $(".our-work").offset().top
        }, 1500)
    })

    // Show Over  
    $('section .our-work .items-box .item img').on("mouseenter mouseleave" ,function(){
        $(this).toggleClass("over");
    });

    // Show More's Button In Our Work

    // $(".show-more").click(function(){
    //     $(".our-work .hidden").show()
    // })
})