AOS.init({once:true});
(function ($) {
	"use strict";
	$('a.js-scroll-trigger:not([href="#"])').click(function (s) {
		s.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				window.smoothScroll(target.offset().top - 40, 800)
			}
		}
	});
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
	new bootstrap.ScrollSpy(document.body, {
		target: '#menu',
		offset: 110
	});
	var navbarCollapse = function () {
		if ($("#menu").offset().top > 100) {
			$("#menu").addClass("navbar-shrink");
			$("#menu .container-fluid").fadeIn();
		} else {
			$("#menu").removeClass("navbar-shrink");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);
})(jQuery);

$(document).ready(function () {
	$('.slider').owlCarousel({
		loop: true,
		margin: 35,
		autoplay: true,
		slideTransition: 'linear',
		autoplayTimeout: 4000,
		autoplaySpeed: 4000,
		dots: false,
		responsive: {
			100: {
				items: 1
			},
			500: {
				items: 2
			},
			800: {
				items: 3
			},
			1000: {
				items: 4
			},
			1500: {
				items: 5,
			}
		}
	}).trigger("play.owl.autoplay");
});