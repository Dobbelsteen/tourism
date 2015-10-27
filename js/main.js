$(function(){

    $('.scroll').on('click', function(event) {
        event.preventDefault();
        var target = "#" + $(this).data('target');
        var offs = $(target).offset().top;

        $('html, body').animate({
            scrollTop: offs-80
        }, 700);
    });

    $( '.scrollTop' ).on('click', function(event) {
        event.preventDefault();
        $('body').animate({
            scrollTop: $('body').offset().top
        }, 700);
    });
    
    
    // Sticky navigation stuff
    var stickyNavTop = $('#nav').offset().top;
    var navRect;
    var wWidth;
    var navOffset;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#nav').addClass('sticky');
            $('#nav').attr('style', 'padding-right: '+navOffset+'px');
        } else {
            $('#nav').removeClass('sticky');
            $('#nav').attr('style', '');
        }
    };
    
    function stickyRight() {
        navRect = document.getElementById('nav').getBoundingClientRect();
        wWidth  =  $(window).width();
        navOffset = wWidth - navRect.right + 15;
                
        if(navOffset <= 0) 
            navOffset = 15;
    }

    stickyRight();
    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
    
    $(window).resize(function() {
        stickyRight();
        stickyNav();
    });

    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

});