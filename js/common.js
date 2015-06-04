head.ready(function() {

	$(document).on("click", function(){
		$(".js-menu").slideUp(200);
		$('.js-open-menu').removeClass("is-active");
	});

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	var configCat = {
		slidesToShow: 4,
		dots: false,
		arrows: false,
		responsive: [
		   {
		     breakpoint: 1023,
		     settings: {
		       dots: true,
		       centerMode: true,
		       centerPadding: '105px',
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 767,
		     settings: {
		       dots: true,
		       centerMode: true,
		       centerPadding: '55px',
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 640,
		     settings: {
		       dots: true,
		       centerMode: true,
		       centerPadding: '55px',
		       slidesToShow: 1
		     }
		   },
		   {
		     breakpoint: 480,
		     settings: {
		       dots: true,
		       centerMode: true,
		       centerPadding: '65px',
		       slidesToShow: 1
		     }
		   },
		   {
		     breakpoint: 375,
		     settings: {
		       dots: true,
		       centerMode: true,
		       centerPadding: '45px',
		       slidesToShow: 1
		     }
		   },
		]
	}
	$(".js-slider-cat").slick(configCat);

	var config = {
		slidesToShow: 1,
		dots: false,
		arrows: false,
		responsive: [
		   {
		     breakpoint: 767,
		     settings: {
		       dots: true,
		       slidesToShow: 1
		     }
		   }
		]
	}
	$('.js-slider').on('init', function(slick) {
		  setTimeout(function(){
		  	$('.slider').addClass("is-ready");
		  },200);
	});
	$(".js-slider").slick(config);

	
	$('.js-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.js-slider-nav li').removeClass("is-active");
		$('.js-slider-nav a[data-slide="'+nextSlide+'"]').parent().addClass("is-active");
	});

	$(".js-slider-nav a").on("click", function(){
		var index = $(this).attr("data-slide");
		$(".js-slider-nav li").removeClass("is-active");
		$(this).parent().addClass("is-active");
		$('.js-slider').slick('slickGoTo', index);
		return false;
	});
//menu
	 $('.js-open-menu').on("click", function(event){
	 	var $menu = $('.js-menu'),
	 			$this = $(this);
		 	$this.toggleClass('is-active');
		 	$menu.slideToggle(200);
		 event.stopPropagation();
		 return false;
	 });

	 $('.js-menu').on("click", function(event){
		 event.stopPropagation();
		 return false;
	 });

	$('.js-slider-promo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		asNavFor: '.js-slider-vertical',
		vertical: true,
		verticalSwiping: true
	});
	$('.js-slider-vertical').slick({
		slidesToShow: 5,
		infinite: false,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-slider-promo',
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		responsive: [
		   {
		     breakpoint: 767,
		     
		     settings: {
		       slidesToShow: 1,
		       slidesToScroll: 1,
		       vertical: false
		     }
		   }
		]
	}); 

	$("body").on('click', ".js-slider-vertical .slick-slide", function(){
		$(".js-slider-vertical .slick-slide").removeClass("is-current");
		$(this).addClass("is-current");	
	});
	$(".js-slider-prev").on('click', function(){
		$(".js-slider-vertical").slick("slickPrev");
		return false;
	});
	$(".js-slider-next").on('click', function(){
		$(".js-slider-vertical").slick("slickNext");
		return false;
	});
	$(".js-slider-vertical").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-slide').removeClass("is-current");
		$('[data-slick-index="'+nextSlide+'"]').addClass("is-current");
	});

	function fixHeader() {
		var top = $(document).scrollTop();
		if (top > 0) {
			$("body").addClass("is-fixed-header");
		}
		else{
			$("body").removeClass("is-fixed-header");
		}
	}
	fixHeader();
	$(window).scroll(function(){
		fixHeader();
	});
	//////////////////
	var configSlider2 = {
		slidesToShow: 1,
		dots: false,
		arrows: true,
		responsive: [
		   {
		     breakpoint: 767,
		     settings: {
		       dots: true,
		       arrows: false,
		       slidesToShow: 1
		     }
		   }
		]
	}
	$('.js-slider2').on('init', function(slick) {
		  setTimeout(function(){
		  	$('.slider2').addClass("is-ready");
		  },200);
	});
	$(".js-slider2").slick(configSlider2);

	
	$('.js-slider2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.js-slider2-nav li').removeClass("is-active");
		$('.js-slider2-nav a[data-slide="'+nextSlide+'"]').parent().addClass("is-active");
	});

	$(".js-slider2-nav a").on("click", function(){
		var index = $(this).attr("data-slide");
		$(".js-slider2-nav li").removeClass("is-active");
		$(this).parent().addClass("is-active");
		$('.js-slider2').slick('slickGoTo', index);
		return false;
	});
	//number
	function number() { 
        var number = $(".js-number");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus-number");
            var minus = $(this).find(".js-minus-number");
            plus.on("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                return false;
            });
            input.on("change", function(){
                var val = +$(this).val();
                if (val > max_number) {
                    val = max_number;
                    $(this).val(val);
                }
                if (val == '') {
                    val = 1;
                    $(this).val(val);
                }
            });
        });
    }
    number();
		jQuery(function()
		{
			jQuery('.scroll-pane').jScrollPane();
		});

});