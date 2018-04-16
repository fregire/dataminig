$(document).ready(function() {
	// Активация слайдеров

	// Актвивация слайдера работ
	$(".examples__slider").slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><i class="arrow arrow--prev" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slick-next"><i class="arrow arrow--next" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Вперед</span></button>',
    responsive: [
    	{
    		breakpoint: 760,
    		settings: {
    			slidesToShow: 1
    		}
    	},
    	{
    		breakpoint: 900,
    		settings: {
    			slidesToShow: 2,
    			centerMode: true
    		}
    	}
    ]
	});

	// Активация слайдера трансляций
	$(".video-slider__slides").slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><i class="arrow arrow--prev" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slick-next"><i class="arrow arrow--next" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Вперед</span></button>'
	});

	// Подставляет в главное превью ссылку из ролика на ютубе
	$(".video-slider__item").on("click", function() {
		var url = $(this).children(".video-slider__preview").attr("data-url");
		var urlString = url.split("watch?v=");
		if(urlString.length === 1) {
			$(".video-slider__player").attr("src", urlString);
		} else {
			$(".video-slider__player").attr("src", urlString.join("embed/"));
		}
		
	});
});