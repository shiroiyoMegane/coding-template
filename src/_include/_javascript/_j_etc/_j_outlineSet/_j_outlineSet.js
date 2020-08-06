
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

			$(window).on("touchstart", function(e) {
				
				for (var i = 0; i < e.touches.length; i++) {
					var t = e.touches[i];       // 触れている指に関する情報を取得
				}
				if(e.touches.length>2) {
					$(_c.TARGET).css({
						'outline': '2px solid red'
					})
				} else {
					$(_c.TARGET).css({
						'outline': 'none'
					})
				}
				
			});

			$(window).on("touchend", function(e) {
				$(_c.TARGET).css({
					'outline': 'none'
				})
			});

			
	}
}

export default function(op) {
	window.C_OUTLINESET.init(op);
}

