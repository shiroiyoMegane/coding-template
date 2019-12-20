'use strict'
require("@babel/polyfill");
const comSet = require('../_include/_pages/_p_common/_p_common.js');
const componentSet = require('../_include/_pages/_p_component/_p_component.js');
const canvasSet = require('../_include/_pages/_p_canvas/_p_canvas.js');
const uaSet = require('../_include/_modules/_m_javascript/_m_ua/_m_ua.js');


let globalTimeoutId, globalRequestId;
let globalOption = {
	W_WIDTH: window.innerWidth,
	SP_WIDTH: 768,
	PC_WIDTH: 1200,
	UA: new uaSet().dvType(),
	PAGE_FLAG: "html",
}

const globalOptionSet = (op) => {
	let scroll;
	(function (w, r) {
		w['r'+r] = w['r'+r] || w['webkitR'+r] || w['mozR'+r] || w['msR'+r] || w['oR'+r] || function(c){ w.setTimeout(c, 1000 / 60); };
	})(window, 'equestAnimationFrame');

	const set = () => {
		op.SCROLL_TOP = (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
		op.W_WIDTH = window.innerWidth;
		// console.log(op);
		$('#debug').append(op);
	}
	const loop = () => {
		globalRequestId = requestAnimationFrame(loop);
		globalTimeoutId = setTimeout( function () {
			set();
			window.cancelAnimationFrame(globalRequestId);
		}, 300 ) ;
	};
	loop();
	window.addEventListener('resize',function(){
		clearTimeout( globalTimeoutId ) ;
		loop();
	}, false)
	window.addEventListener('scroll',function(){
		clearTimeout( globalTimeoutId ) ;
		loop();
	}, false)
}

function init() {
	globalOptionSet(globalOption);
	comSet(globalOption);
	componentSet(globalOption);
	canvasSet(globalOption);
}
init();