head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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
		arrows: false
	}
	$(".js-slider-cat").slick(configCat);

	var config = {
		slidesToShow: 1,
		dots: false,
		arrows: false
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
	 $('.js-open-menu').click(function(){
	 	var $menu = $('.js-menu'),
	 			$this = $(this);
		 	$this.toggleClass('is-active');
		 	$menu.stop().slideToggle('fast');
	 })       
});