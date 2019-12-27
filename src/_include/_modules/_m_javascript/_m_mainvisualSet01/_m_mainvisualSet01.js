const slickSet = require('../_m_slick/_m_slick.js');
module.exports = (op) => {
	let mainvisualSet01 = new slickSet();
	mainvisualSet01.set('.js-mainvisualSet01');
	mainvisualSet01.option({
		arrows: true,
		appendArrows: $('.c-mainvisualSet01'),
		prevArrow: '<p class="slick-prev"></p>',
		nextArrow: '<p class="slick-next"></p>',
		customPaging: function(slick, index){
			return '<span></span>';
		},
		dots: true,
	});

	let slickSlider = new slickSet();
	slickSlider.set('.js-slickSlider');
	slickSlider.option();
}
