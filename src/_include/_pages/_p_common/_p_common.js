// global option
import globalSet from '../../_javascript/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();
// pjax
import barbaSet from '../../_javascript/_j_load/_j_barbaSet/_j_barbaSet.js';
// inview set
import inView from '../../_javascript/_j_scroll/_j_inView/_j_inView.js';
// Inertial scroll
import luxySet from '../../_javascript/_j_scroll/_j_luxySet/_j_luxySet.js';
// accordion
import accordionSet from '../../_javascript/_j_base/_j_accordionSet/_j_accordionSet.js';
// sp tell link
import spTellLink from '../../_javascript/_j_base/_j_spTellLink/_j_spTellLink.js';
//matchHeight
import matchHeight from '../../_javascript/_j_base/_j_matchHeight/_j_matchHeight.js';
//mouseStarker
import mouseStalker01 from '../../_javascript/_j_etc/_j_mouseStalker01/_j_mouseStalker01.js';
//outline
import outlineSet from '../../_javascript/_j_etc/_j_outlineSet/_j_outlineSet.js';

// // ----- component用 ------
// import markupBlock from '../../_modules/_m_javascript/_m_markupBlock/_m_markupBlock.js';
import mainvisualSet01 from '../../_javascript/_j_slider/_j_mainvisualSet01/_j_mainvisualSet01.js';
import canvasSlider01 from '../../_javascript/_j_slider/_j_canvasSlider01/_j_canvasSlider01.js';
import canvasCircle01 from '../../_javascript/_j_etc/_j_canvasCircle01/_j_canvasCircle01.js';

let _g;

function domLoadAfter() {
	accordionSet();
	// markupBlock();
	spTellLink();
	outlineSet();
	
}

function imageLoadAfter() {
	inView();
	luxySet(_g);
	mainvisualSet01();
	matchHeight();
	canvasSlider01(_g);
	canvasCircle01();
	mouseStalker01();
}

function init() {
	// serviceWorkerSet();
	
	_g = window.GLOBAL;
	_g.domLoad(function(){
		barbaSet();
		if(_g.PJAX_FLAG == false) {
			console.log("domLoad");
			domLoadAfter();
		}
		_g.pjaxLoad(function(){
			console.log("domLoad_pjax");
			domLoadAfter();
		});
	});
	_g.imageLoad(function(){
		if(_g.PJAX_FLAG == false) {
			console.log("imageLoad");
			imageLoadAfter();
		}
		_g.pjaxLoad(function(){
			console.log("imageLoad_pjax");
			imageLoadAfter();
		});
		_g.PJAX_FLAG = true;
	});
}

export default function() {
	init();
}