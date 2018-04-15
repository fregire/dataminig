$(document).ready(function() {
	$(".examples__slider").slick({
		dots: true,
		prevArrow: '<button class="slick-prev"><i class="arrow arrow--prev" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slick-next"><i class="arrow arrow--next" arial-hidden="true"></i><span arial-hidden="true" class="visually-hidden">Вперед</span></button>'
	});
	// TODO: Активировать слайдер slick + сделать секцию для миниатюры, 
	// если видео, менять путь, если фрейм - ссылку + стилизовать четыре элемента на превью
});