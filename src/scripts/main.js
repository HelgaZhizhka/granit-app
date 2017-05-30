'use strict';
$(function () {
	var $dropdownLink           = $('.js-dropdown-link'), //dropdown link for open/close filter mobile
			$filterMobile						= $('.filter_mobile'); //in filter mobile
	//dropdown filter color on mobile
	$dropdownLink.on('click', function(e){
		if (!($filterMobile).is(e.target)	&& $filterMobile.has(e.target).length === 0) {
			$(this).toggleClass('active');
		}
	});
	$('body').on('click touchstart', function(e) {
		if (!($dropdownLink).is(e.target) && $dropdownLink.has(e.target).length === 0
			&& !($filterMobile).is(e.target)
			&& $filterMobile.has(e.target).length === 0
			&& $filterMobile.is(':visible')) {
			$dropdownLink.removeClass('active');
		}
	});
	
});