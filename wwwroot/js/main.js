jQuery(document).ready(function( $ ) {


  // Initiate the wowjs animation library
  new WOW().init();

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

});

/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function () {
	$("#navigation").css("background-color", "#007CC2");
	$("#preloader").fadeOut("slow");

});

$(document).ready(function () {

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function () {
			console.log('begin scrolling');
		},
		onComplete: function () {
			console.log('done scrolling');
		}
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$("#navigation").css("background-color", "#007CC2");
		} else {
			/*$("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");*/
			$("#navigation").css("background-color", "#007CC2");
		}
	});

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

	var slideHeight = $(window).height();

	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);

	$(window).resize(function () {
		'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
	});


	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */


	// portfolio filtering

	$(".project-wrapper").mixItUp();


	$(".fancybox").fancybox({
		padding: 0,

		openEffect: 'elastic',
		openSpeed: 650,

		closeEffect: 'elastic',
		closeSpeed: 550,

		closeClick: true,
	});

	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$("#back-top").fadeIn(200)
		} else {
			$("#back-top").fadeOut(200)
		}
	});

	$("#back-top").click(function () {
		$("html, body").stop().animate({
			scrollTop: 0
		}, 1500, "easeInOutExpo")
	});

});
