/* jshint browser: true */
/* globals $ */
$.fn.simpleLazyLoad = function(options){
	'use strict';
	
	var settings = $.extend({
		
	}, options);
	
	return this.each(function(){
		var $elements = $(this);
		
		$(window).scroll(function(){
			$elements.each(function(){
				var $this = $(this);
				var rect = $(this)[0].getBoundingClientRect();
				
				// Determine if element is in viewport
				if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width()){
					var newSrc = $this.data('src');
					
					// Check element has an alternative source
					if(newSrc && $this.attr('data-loaded') != 'true'){
						// Hide the element
						$this.css('opacity', '0');
						
						// Swap out the source
						$this.attr('src', newSrc).removeAttr('data-src');
						
						// Show the element
						$this.animate({ opacity: 1 });
						$this.attr('data-loaded', 'true');
					}
				}
			});
		});
	});
};
