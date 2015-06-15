head.ready(function() {

	$(document).on("click", function(){
		$(".menu").hide();
		$(".nav").hide();
		$('.js-open-menu').removeClass("is-active");
		$('.js-search').removeClass("is-active");
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

	$(".js-slider-nav a").on("mouseover", function(){
		if($(this).parents('li').hasClass("is-inactive")) return false;
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
		//asNavFor: '.js-slider-vertical',
		vertical: true,
		verticalSwiping: true
	});
	$('.js-slider-vertical').slick({
		slidesToShow: 5,
		infinite: false,
		slidesToScroll: 5,
		arrows: false,
		//asNavFor: '.js-slider-promo',
		//focusOnSelect: true,
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
		var index = $(this).attr("data-slick-index");
		$(".js-slider-promo").slick("slickGoTo", index);
		$(".js-slider-vertical .slick-slide").removeClass("is-current");
		$(this).addClass("is-current");	
	});
	var activeSlide = $(".js-slider-vertical .is-current");
	$(".js-slider-prev").on('click', function(){
		//if (activeSlide.prev().length) {
			//activeSlide.removeClass("is-current").prev().addClass("is-current");
		//}
		$(".js-slider-vertical").slick("slickPrev");
		//var index = $(this).attr("data-slick-index");
		//$(".js-slider-promo").slick("slickGoTo", index);
		return false;
	});
	$(".js-slider-next").on('click', function(){
		//if (activeSlide.next().length) {
			//console.log(activeSlide.next().length);
			//activeSlide.removeClass("is-current").next().addClass("is-current");
		//}
		$(".js-slider-vertical").slick("slickNext");
		//var index = $(this).attr("data-slick-index");
		//$(".js-slider-promo").slick("slickGoTo", index);
		return false;
	});
	// $(".js-slider-vertical").on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	//$('.slick-slide').removeClass("is-current");
	// 	//$('[data-slick-index="'+nextSlide+'"]').addClass("is-current");
	// });

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

	
	// $('.js-slider2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.js-slider2-nav li').removeClass("is-active");
	// 	$('.js-slider2-nav a[data-slide="'+nextSlide+'"]').parent().addClass("is-active");
	// });

	// $(".js-slider2-nav a").on("click", function(){
	// 	var index = $(this).attr("data-slide");
	// 	$(".js-slider2-nav li").removeClass("is-active");
	// 	$(this).parent().addClass("is-active");
	// 	$('.js-slider2').slick('slickGoTo', index);
	// 	return false;
	// });
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
		
		$('.scroll-pane').jScrollPane();


		function tabsLoad() {
				 $(".js-tabs-simple").each(function(){
					 if ($(this).find(".is-active").length) {
							var index = $(this).find(".is-active").index();
						$(this).next().find(".js-tabs-simple-content").eq(index).show();
					 }
					 else {
						 $(this).find("li").eq(0).addClass("is-active");
						 $(this).next().find(".js-tabs-simple-content").eq(0).show();
					 }
				 });
		 }
		 tabsLoad();
			$('.js-tabs-simple a').on("click",function () {
				var tabs = $(this).parents(".js-tabs-simple");
				var tabsCont = tabs.next().find(".js-tabs-simple-content");
				var index = $(this).parent().index();
				tabs.find("li").removeClass("is-active");
					$(this).parent().addClass("is-active");
				tabsCont.hide();
				tabsCont.eq(index).show();
				return false;
			});


	$(document).click(function() {
					$(".js-select").removeClass("is-active");
					$(".js-select-list").slideUp(100);
			});
		
	// select list
		$("body").on("click",".js-select",function(event) {
				event.stopPropagation();
		});
		$("body").on("click",".glyph.icon",function() {
			// $(".js-select-text").click();
	});
		$("body").on("click",".js-select-text",function(event) {
			var select = $(this).parents(".js-select");
				if (select.hasClass("is-active")) {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").slideUp(100);
				}
				else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").slideUp(100);
						select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
				}
			 
		});

		$("body").on("click",".js-select-list li",function() {
				var val = $(this).attr("data-val");
				var text = $(this).text();
				var select = $(this).parents(".js-select");
				var selectList = $(this).parents(".js-select-list");
				select.find(".js-select-text-in").text(text);
				select.find("option").removeAttr("selected");
				select.find('option[value="'+val+'"]').attr("selected", "selected");
				selectList.find("li").removeClass("is-active");
				$(this).addClass("is-active");
				select.removeClass("is-active");
				selectList.slideUp(100);
				return false;
				
		});
		function doMask(){
			if($('.js-tel-mask').length){
				$('.js-tel-mask').mask("+7 (999) 999-99-99", {placeholder: "X"});
			}
		}
		doMask();

		//js-search
		$('.js-search-btn').on("click", function(){
			var form = $(this).parents('.js-search');
			if(!form.hasClass('is-active')) { 
				form.addClass('is-active');
			return false;}

		});
		$('.js-search-input').on("click", function(){
			 event.stopPropagation();
			 return false;
		});

		$(".js-popup").on("click", function(){
			$(this).fadeOut();
		});
		$(".js-close-popup").on("click", function(){
			$(this).parents(".js-popup").fadeOut();
			return false;
		});


		$(".js-popup-main").on("click", function(event){
			event.stopPropagation();
		});

});