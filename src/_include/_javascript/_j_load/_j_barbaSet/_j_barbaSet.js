import globalSet from '../../_j_base/_j_globalSet/_j_globalSet.js';
import Barba from "barba.js"
globalSet();

let _g = window.GLOBAL;

window.C_BARBA = {
	init: function(){
		let _c = this;
		Barba.Pjax.start();
		Barba.Prefetch.init();
		Barba.Utils.xhrTimeout = 10000;
	}
}

export default function() {
	window.C_BARBA.init();
}

