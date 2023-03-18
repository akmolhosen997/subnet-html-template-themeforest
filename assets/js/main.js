(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// meanmenu
$('.mobile_menu_1').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

// mobile-menu-active

$('.mobile_menu_1_toggle').on('click', function() {
	$('.overlay, .sidebar_1_active').addClass('active');
});

$('.overlay, .sidebar_1_close').on('click', function() {
	$('.sidebar_1_active').removeClass('active');
	$('.overlay').removeClass('active');
})

// menu animation

$('.mobile_menu_1_toggle').on('click', function() {
	$('.subnet-sidebar-1-logo-wrap , .subnet-sidebar-1-mobile-menu-wrap , .subnet-sidebar-1-search-wrap').addClass('is_show');
});

$('.overlay, .sidebar_1_close').on('click', function() {
	$('.subnet-sidebar-1-logo-wrap , .subnet-sidebar-1-mobile-menu-wrap , .subnet-sidebar-1-search-wrap').removeClass('is_show');
	$('.overlay').removeClass('is_show');
})

// search-1-active


// mobile-menu-active

$('.search_1_popup_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});

$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})


// hero-slide-active

function sliderActive_hero3() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".hero_1_slide_acitve").length > 0) {
		let sliderActive1 = '.hero_1_slide_acitve';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			pagination: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			// If we need pagination
	        pagination: {
				el: ".slider-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.hero-slide-next-btn',
				prevEl: '.hero-slide-prev-btn',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}

	sliderActive_hero3();

//  client-list-1

if (jQuery(".client_list_1_slide_active").length > 0) {
	let acooterbrand = new Swiper('.client_list_1_slide_active', {
		slidesPerView: 6,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
			},

		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		}

});}



//  testimonial-1

if (jQuery(".testimonial_1_slide_active").length > 0) {
	let acooterbrand = new Swiper('.testimonial_1_slide_active', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 3000000,
			},

		pagination: {
			el: ".testimonial_1_progation",
			clickable: true,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
		}

});}

// feature-show-1

if (jQuery(".feature_show_1_slide_active").length > 0) {
	let acooterbrand = new Swiper('.feature_show_1_slide_active', {
		slidesPerView: 6,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 3000000,
			},
		scrollbar: {
			el: ".feature_show_1_scrollbar",
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 5,
			}
		}

});}


// feature-show-2

if (jQuery(".feature_show_2_slide_active").length > 0) {
	let acooterbrand = new Swiper('.feature_show_2_slide_active', {
		slidesPerView: 4,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 5000,
			},
		navigation: {
			nextEl: ".feature_show_2_slide_next",
			prevEl: ".feature_show_2_slide_prev",
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		}

});}


// about-1-silider

var swiper = new Swiper(".about_1_slide_active", {
	effect: "cards",
	grabCursor: true,
	scrollbar: {
		el: ".about_1_slide_scrollbar",
		},
	navigation: {
		nextEl: ".about_1_slide_next",
		prevEl: ".about_1_slide_prev",
		},
  });


// pricing-2-active
 
$(".subnet-pricing-2-box").on("mouseover", function(){
	var current_class = document.getElementsByClassName("subnet-pricing-2-box active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });

// splitting text animaton

$(window).on("load", function () {
	Splitting();
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});
$('.has-nice-select, .contact-form select').niceSelect();
// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// cross 2
$('.cross2').cross2({
	titlesEnabled: false,
	mousemoveEnabled: true,
	easing: 'easeInOutBack',
	animationDuration: 1200,
});

//   odometer
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});
// WOW active
new WOW().init();

// datepicker
$('[data-toggle="datepicker"]').datepicker();
// select2
$('#select-doctor, .sg-has-select-2').select2();
// popup
$('.video-call-btn, .sg-header-sidebar-action-btn').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').addClass('visible');
});
$('.cross-btn button, .bg-overlay').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').removeClass('visible');
});
$('.sg-header-sidebar-action-btn-bar').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').addClass('visible');
})
$('.bg-overlay, .sg-sidebar-menu-cross button').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').removeClass('visible');
})
$('.header-search-toogle-btn').on('click', function() {
	$('.bg-overlay, .sg-popup-search-box').addClass('visible');
});
$('.bg-overlay, .sg-popup-search-box-close-action-btn').on('click', function() {
	$('.sg-popup-search-box').removeClass('visible');
	$('.bg-overlay').removeClass('visible');
})
$('.has-cursor').on('click',function() {
	$(this).closest('.sg-widget-shop-1').find('.sg-shop-widget-toogle').slideToggle(500);
})
// range slider activation
$(".slider-range-bar").slider({
	range: true,
	min: 0,
	max: 500,
	values: [75, 300],
	slide: function (event, ui) {
		$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	},
});
// product quantity
var productQuantity = 1;
// quantity form 1
$('.sg-single-product-popup-quantity-box .plus').on('click', function () {
	var selectedInput = $(this).closest('.sg-single-product-popup-quantity-box').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.sg-single-product-popup-quantity-box .minus').on('click', function () {
	var selectedInput = $(this).closest('.sg-single-product-popup-quantity-box').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});
// quantity form 2
$('.sg-shopping-cart-popup-quantity-form .plus-btn').on('click', function () {
	var selectedInput = $(this).closest('.sg-shopping-cart-popup-quantity-form').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.sg-shopping-cart-popup-quantity-form .minus-btn').on('click', function () {
	var selectedInput = $(this).closest('.sg-shopping-cart-popup-quantity-form').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});


// star rating
$(".sg-star-rating").starRating({
	initialRating: 4,
	strokeColor: '#FFCD00',
	strokeWidth: 10,
	starSize: 16.46
  });
  $('.has-cart-popup').on('click', function() {
	  $('.sg-shopping-cart-popup').addClass('visible');
	  $('.bg-overlay').addClass('visible');
  })
  $('.sg-shopping-cart-popup-close-btn, .bg-overlay, .shopping-cart-sidebar-popup-close').on('click', function() {
	$('.sg-shopping-cart-popup').removeClass('visible');
	$('.bg-overlay').removeClass('visible');
})
// admin panel
$('.side-admin-settings').on('click', function() {
	$('.side-admin-panel-right').addClass('side-admin-panel-visible');
	$('.overlay').addClass('overlay-visible');
})
$('.cinkes-side-admin-panel-close-btn, .overlay').on('click', function() {
	$('.side-admin-panel-right').removeClass('side-admin-panel-visible');
	$('.overlay').removeClass('overlay-visible');
})

/*------------------------------------
Magic Curson
--------------------------------------*/

$('.admin-cursor-magic').on('click', function() {
	$('.mouse-cursor-invisible').addClass('visible');
	console.log('magic cursor clicked');
});
$('.admin-cursor-default').on('click', function() {
	$('.mouse-cursor-invisible').removeClass('visible');
	console.log('default cursor clicked');
});

})(jQuery);

// Mouse Custom Cursor
function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                    ($(this).is("a", "button") &&
                        $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
}
itCursor();