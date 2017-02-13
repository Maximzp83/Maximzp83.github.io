function cl(val) {
	console.log(val);
}



$(document).ready(function() {
// ========Open Search-form Button=======
	var headerSearchFormElem = $("header .search-form-wrapper .form-group");
	var openFormButtonElem = headerSearchFormElem.siblings(".visible-search-button");

		openFormButtonElem.click(function(){
		headerSearchFormElem.toggleClass('form-group-visible');
	});

// ========Project Zoom-Button=======
	var projectZoomButtonElem = $("#projects-slider .project-zoom-button");
	// var projectImageElem = projectZoomButtonElem.parent().siblings("img");
	
	$(projectZoomButtonElem).click(function() {
		$(this).parent().siblings("img").toggleClass("project-img-zoomed");
	});

// ========Project Like-Button=======
	var projectLikeButtonElem = $("#projects-slider .project-like-icon");
	var likeCountElem,
			count; //= projectLikeButtonElem.siblings('.project-like-count');

			$(projectLikeButtonElem).click(function() {
				$(this).toggleClass("project-like-icon-active");
				likeCountElem = $(this).siblings('.project-like-count');
				count = +likeCountElem.html();

			if ( !$(this).hasClass('project-like-icon-active') ) {
				count--;
				likeCountElem.html(count);
			} else {
				count++;
				likeCountElem.html(count);
			};
		});
	

// ========Accordion Indicator=======
    $("#accordion-block .panel-heading .accordion-toggle").click(function() {
    	var parentElem = $(this).parent('.panel-title');
    	var accordionElem = parentElem.find(".accordion-toggle");
    	var indicatorElem = parentElem.find(".indicator");

    	if (accordionElem.hasClass('collapsed') ) {
    		indicatorElem.toggleClass('glyphicon-plus glyphicon-minus');
    		accordionElem.toggleClass('accordion-toggle-active');
    		// indicatorElem.toggleClass('indicator-active');
    	} else {
    		indicatorElem.toggleClass('glyphicon-minus glyphicon-plus');
    		accordionElem.toggleClass('accordion-toggle-active');
    		// indicatorElem.toggleClass('indicator-active');
    	}
    });

// ========FEEDBACK FORM==========
		var inputFieldElem = $('.contacts-block-wrapper .form-control');

		$(inputFieldElem).on('input propertychange', function() {
			if ( $(this).val() ) {
				$(this).addClass('highlighted-field');
			} else {
				$(this).removeClass('highlighted-field');
			}
		})

// ========Clear Message Button=======
		
		var messageFieldElem = $('.contacts-block-wrapper #message-field');
		var clearButtonElem = $(".contacts-block-wrapper .form-control-clear");

		$(messageFieldElem).on('input propertychange', function() {
			if ( $(this).val() ) {
				clearButtonElem.removeClass('inactive');
			} else {
				clearButtonElem.addClass('inactive');
				$(this).removeClass('highlighted-field');
			};
		})
		
		clearButtonElem.click(function() {
			 $(this).parent().siblings('.has-clear').children("#message-field").val('');
			 clearButtonElem.addClass('inactive');
			 inputFieldElem.removeClass('highlighted-field');
		});
});