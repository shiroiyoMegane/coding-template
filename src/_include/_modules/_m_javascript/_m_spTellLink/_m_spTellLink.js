import globalSet from '../_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;

export default function(op) {
	let init = () => {
		let _g_defaultOp = {
			className: '.js-tellLink',
		}
		let _g_op = Object.assign(_g_defaultOp, op);
	
		let	linkTarget = document.querySelectorAll(_g_op.className);
		if(_g.UA == 'pc'){
			Array.prototype.slice.call(linkTarget).forEach(function(event) {
				event.outerHTML = event.innerHTML
			});
		}
	}
	
	_g.domLoad(function(){
		init();
	});
}