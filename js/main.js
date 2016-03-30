/**
 * Created by PC on 23.03.2016.
 */
// Can also be used with $(document).ready()
$(window).load(function() {
    $('.home-slider').flexslider({
        animation: "slide"
    });
});

$('.menu-toggle').click(function(){
    if ($(this).hasClass('show-menu')) {
        $(this).removeClass('show-menu');
        $('.header-bottom .top-menu').hide();
    }
    else {
        $('.dropdown').addClass('show-menu');
        $(this).addClass('show-menu');
        $('.header-bottom .top-menu').show();
    }
});


$(window).resize(function(){
    if($(window).width() >= 850){
        $('.header-bottom .top-menu').css('display', 'block');
    }
    else{
        $('.header-bottom .top-menu').css('display', 'none');
    }
});

$(function(){
    $(document).ready(function(){
        var distance = $('.header-bottom').offset().top;
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();
            if(winTop >= distance){
                console.log(distance);
                $(".header-top").hide();
                $("header").addClass('fixed-menu');
            }else{
                console.log(distance);
                $(".header-top").show();
                $("header").removeClass('fixed-menu');
            }
        });
    });
});


