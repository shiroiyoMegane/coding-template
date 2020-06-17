// import globalSet from '../_m_globalSet/_m_globalSet.js';
// globalSet();
// let _g = window.GLOBAL;

window.C_OUTLINESET = {
	TARGET: null,
	DEFAULT: {
		target: '*',
	},
	OPTION: null,
	init: function(op){
		let _c = this;
			_c.OPTION = Object.assign(_c.DEFAULT, op);
			_c.TARGET = document.querySelectorAll(_c.OPTION.target);

			$(window).on("keydown", function(e) {
				if(event.altKey){
				  if(e.keyCode === 79){
					$(_c.TARGET).css({
						'outline': '2px solid red'
					})
					 return false;
				  }
				}
			});
			$(window).on("keyup", function(e) {
				if(event.altKey){
				  if(e.keyCode === 79){
					$(_c.TARGET).css({
						'outline': 'none'
					})
					 return false;
				  }
				}
			});
	}
}

export default function(op) {
	window.C_OUTLINESET.init(op);
}

