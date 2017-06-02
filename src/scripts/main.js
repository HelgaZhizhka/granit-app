'use strict';
$(function () {
	var $dropdownLink           = $('.js-dropdown-link'), //dropdown link for open/close filter mobile
			$filterMobile						= $('.filter_mobile'), //in filter mobile
			$areaOverlay						= $('html.mobile .area__item_bg'), // overlay area item bg on mobile
			$sliderMobile						= $('.js-slider-mobile'), //slider main page
			$sliderNavigation				= $('.js-slider-navigation'), //slider navigation page
			$mobileMenu							= $('.js-mobile-menu'), //menu mobile
			$mobileMenuOpenLink			= $('.js-menu-open'), //  link for open mobile menu
			detectTap								= false,
			$body										= $('body');
	
	// Check for the existence of the element on the page
	jQuery.fn.exists = function() {
		return jQuery(this).length;
	}
	
	$body.on('touchstart', function() {
		detectTap = true; //detects all touch events
	});
	$body.on('touchmove', function() {
		detectTap = false; //Excludes the scroll events from touch events
	});
	$body.on('click touchend', function(event) {
		if (event.type == "click") detectTap = true; //detects click events
		if (detectTap){
			//here you can write the function or codes you wanna execute on tap
			if (!($dropdownLink).is(event.target) && $dropdownLink.has(event.target).length === 0
				&& !($filterMobile).is(event.target)
				&& $filterMobile.has(event.target).length === 0
				&& $filterMobile.is(':visible')) {
				$filterMobile.removeClass('active');
			}
		}
	});
	//dropdown filter color on mobile
	$dropdownLink.on('click touchend', function(event){
		if (event.type == "click") detectTap = true; //detects click events
		event.preventDefault();
		if (detectTap	&& !$filterMobile.hasClass('active')){
			$filterMobile.addClass('active');
		} else if (!($filterMobile).is(event.target) && $filterMobile.has(event.target).length === 0 ) {
			$filterMobile.removeClass('active');
		}
	});
	
	$areaOverlay.on('click touchstart', function(event) {
		$(this).addClass('hover');
	});
	$areaOverlay.on('touchend', function() {
		$(this).removeClass('hover');
	});
	
	//slider mobile settings
	if($sliderMobile.exists()) {
		$sliderMobile.each(function(){
			var swiperSliderMobile = new Swiper(this, {
				autoplay: 5000,
				loop: true,
				speed: 800,
				nextButton: $(this).find('.swiper-button-next')[0],
				prevButton: $(this).find('.swiper-button-prev')[0]
			});
		});
	}
	//slider navigation settings
	if($sliderNavigation.exists()) {
		var settingsSliderNavigation = {
				loop: false,
				speed: 800,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			},
			swiperSliderNavigation;
		swiperSliderNavigation = new Swiper($sliderNavigation, settingsSliderNavigation);
	}
	
	//open mobile menu
	$mobileMenuOpenLink.on('click touchend', function(event){
		if (event.type == "click") detectTap = true; //detects click events
		if (detectTap){
			event.preventDefault();
			$mobileMenu.toggleClass('active');
		}
	});
	
	//close mobile menu
	$mobileMenu.find('.js-menu-close').on('click touchend', function(event){
		if (event.type == "click") detectTap = true; //detects click events
		if (detectTap){
			event.preventDefault();
			$mobileMenu.removeClass('active');
		}
	});
	
});