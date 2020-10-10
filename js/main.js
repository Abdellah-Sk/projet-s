/**
*
* -----------------------------------------------------------------------------
*
* Template : pourreussir
* Author : Microdidac
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });
    });

    // scrollTop init  
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }); 

    // Service Slider
    $('#feature-left').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: false,
        dotsContainer: '#item-thumb',
    });   
         
    //window load
    win.on( 'load', function() {
        //rs menu
        if(win.width() < 992) {
          $('.rs-menu').css({'height': '0', 'opacity': '0'});
          $('.rs-menu-toggle').on( 'click', function(){
             $('.rs-menu').css('opacity', '1');
         });
        }

        // Preloader
        $("#loading").delay(2000).fadeOut(500);
        $(".loading-center").on('click', function() {
        $(".object").fadeOut(500);
        })
    })

    // onepage nav
    var navclose = $('#onepage-menu');
    if(navclose.length){
        $(".nav-menu li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });
        
        if ($.fn.onePageNav) {
            $(".nav-menu").onePageNav({
                currentClass: "active-menu"
            });
        }
    }

    //show hide floating bar
    $('.floating-icons').on('click', function(event) {
        $('.floating-area').toggleClass('hidebar');
        $(this).toggleClass('icon-change');

    });

    var windowHeight = $( window ).height();
    var floatingIcon = (windowHeight - 100);
    var floatingPosition = (windowHeight/2);
    $('.menu-sticky .floating-area').css('top', (floatingPosition));
    $('.menu-sticky .floating-icons').css('top', (floatingIcon));
    
    // navbar collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse");
        navMain.on("click", "a:not([data-toggle])", null, function () {
            navMain.collapse('hide');
        });
    });

    // wow init
    new WOW().init();

    //Videos popup jQuery 
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    }); 

    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });

    // Counter Up
    if ($('.rs-counter').length) {
        $('.rs-counter').counterUp({
            delay: 20,
            time: 1500
        });
    }
    
    /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false)
                },
                768: {
                    items: (smDevice2 ? smDevice : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false)
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false)
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false)
                }
            }
        });
    });

    //off canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }

    //Toggle search    
    $(".cart li.search").on('click', function(){
        $(".search-bar").slideToggle();
    });

    // Bar Chart
    var chartContainer = $('#chartContainer');
    if(chartContainer.length){
        window.onload = function () {
            var chart = new CanvasJS.Chart("chartContainer",
            {
              title:{
                text: ""
              },
              data: [
              {            
                type: "column",        
                dataPoints: [
                { x: 10, y: 2000, label: "Jan"},
                { x: 20, y: 2500, label: "Feb"},
                { x: 30, y: 3000, label: "Mar"},
                { x: 40, y: 4000, label: "Apr"},
                { x: 50, y: 5000, label: "May"},
                { x: 60, y: 6000, label: "Jun"},
                { x: 70, y: 5500, label: "July"},
                { x: 80, y: 8000, label: "Aug"}
                ]
              },
                {            
                type: "column",        
                dataPoints: [
                { x: 10, y: 1000, label: "Jan"},
                { x: 20, y: 1500, label: "Feb"},
                { x: 30, y: 1500, label: "Mar"},
                { x: 40, y: 2000, label: "Apr"},
                { x: 50, y: 2000, label: "May"},
                { x: 60, y: 2500, label: "Jun"},
                { x: 70, y: 1500, label: "July"},
                { x: 80, y: 3500, label: "Aug"}
                ]
              }
              ]
            });

            chart.render();
        }
    }
    
    // Nivo slider init
    var nivo_slider = $('#nivoSlider');
        if(nivo_slider.length){
       $('#nivoSlider').nivoSlider({
           effect: 'random',
           slices: 15,
           boxCols: 8,
           boxRows: 4,
           animSpeed: 600,
           pauseTime: 5000,
           startSlide: 0,
           directionNav: true,
           controlNavThumbs: false,
           pauseOnHover: true,
           manualAdvance: false
       });
    }

    // Google Map
    if ($('#googleMap').length) {
        var initialize = function() {
            var mapOptions = {
              zoom: 17,
              scrollwheel: false,
              center: new google.maps.LatLng(23.780406, 90.422849),
              styles: [{
                  stylers: [{
                      saturation: -100
                  }]
              }]
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: '',
                map: map
            });
        }
        google.maps.event.addDomListener(window, "load", initialize);
    }    
})(jQuery);