import globalSet from '../_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;
import slickSet from '../_m_slick/_m_slick.js';
export default function() {
	let init = () => {
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
	_g.domLoad(function(){
		init();
	});
}
