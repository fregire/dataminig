$(document).ready(function() {
	// Активация слайдеров

	// Актвивация слайдера работ
	$(".examples__slider").slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><i class="arrow arrow--prev" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Назад</span></button>',
    	nextArrow: '<button class="slick-next"><i class="arrow arrow--next" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Вперед</span></button>',
    	responsive: [
	    	{
	    		breakpoint: 1000,
	    		settings: {
	    			slidesToShow: 2,
	    			centerMode: true,
	    			vertical: false,
	    			dots: true
	    		}
	    	},
	    	{
	    		breakpoint: 760,
	    		settings: {
	    			slidesToShow: 1,
	    			centerMode: true,
	    			vertical: false,
	    			dots: true
	    		}
	    	},
	    	{
	    		breakpoint: 480,
	    		settings: {
	    			slidesToShow: 1,
	    			centerMode: false,
	    			vertical: false,
	    		}
	    	}

    	],
    	slidesToShow: 3,
    	vertical: true,
    	centerMode: false,
    	dots: false
	});

	// Активация слайдера трансляций
	$(".video-slider__slides").slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><i class="arrow arrow--prev" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slick-next"><i class="arrow arrow--next" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Вперед</span></button>'
	});
	// Галлерея
	$('.video__link').magnificPopup({
	  type: 'image',
	  gallery: {
	      enabled:true
	  }
	});
});