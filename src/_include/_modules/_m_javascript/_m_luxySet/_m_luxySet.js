import globalSet from '../_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;
import luxy from 'luxy.js';

export default function() {
	function init() {
		_g.domLoad(luxySet);
	}
	function luxySet() {
		if(_g.UA == 'pc') {
			luxy.init({
				wrapper: '.l-contentsBody',
				wrapperSpeed: 0.1,
			});
		}
	}
	init();
}
