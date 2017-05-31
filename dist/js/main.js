'use strict';
$(function () {
	var $dropdownLink           = $('.js-dropdown-link'), //dropdown link for open/close filter mobile
			$filterMobile						= $('.filter_mobile'), //in filter mobile
			$areaOverlay						= $('html.mobile .area__item_bg'), // overlay area item bg on mobile
			$sliderMobile						= $('.js-slider-mobile'), //slider main page
			$sliderNavigation				= $('.js-slider-navigation'), //slider navigation page
			$mobileMenu							= $('.js-mobile-menu'), //menu mobile
			$mobileMenuOpenLink			= $('.js-menu-open'), //  link for open mobile menu
			$body										= $('body');
	
	// Check for the existence of the element on the page
	jQuery.fn.exists = function() {
		return jQuery(this).length;
	}
	
	//dropdown filter color on mobile
	$dropdownLink.on('click touchstart', function(e){
		if (!($filterMobile).is(e.target)	&& $filterMobile.has(e.target).length === 0) {
			$(this).toggleClass('active');
		}
	});
	$body.on('click touchstart', function(e) {
		if (!($dropdownLink).is(e.target) && $dropdownLink.has(e.target).length === 0
			&& !($filterMobile).is(e.target)
			&& $filterMobile.has(e.target).length === 0
			&& $filterMobile.is(':visible')) {
			$dropdownLink.removeClass('active');
		}
	});
	
	$areaOverlay.on('touchstart', function() {
		$(this).children('.overlay-hover').css('opacity','1');
		$(this).children('.circle').css('transform','matrix(1, 0, 0, 1, 0, 0)');
	});
	$areaOverlay.on('touchend', function() {
		$(this).children('.overlay-hover').removeAttr("style");
		$(this).children('.circle').removeAttr("style");
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
				autoplay: 5000,
				loop: true,
				speed: 800,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-next'
			},
			swiperSliderNavigation;
		swiperSliderNavigation = new Swiper($sliderNavigation, settingsSliderNavigation);
	}
	
	//open mobile menu
	$mobileMenuOpenLink.on('click touchstart', function(e){
		e.preventDefault();
		$mobileMenu.toggleClass('active');
	});
	
	//close mobile menu
	$mobileMenu.find('.js-menu-close').on('click touchstart', function(e){
		e.preventDefault();
		$mobileMenu.removeClass('active');
	});
	
});