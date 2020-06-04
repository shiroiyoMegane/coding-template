// import globalSet from '../_m_globalSet/_m_globalSet.js';
// globalSet();
// let _g = window.GLOBAL;

window.C_CANVASCIRCLE = {
	TARGET: null,
	DEFAULT: {
		target: '.js-canvasCircle01',
	},
	G_ARRAY: {},
	OPTION: null,
	init: function(op){
		let _c = this;
			_c.TARGET = document.querySelectorAll(_c.DEFAULT.target);
			// console.log(_c.TARGET);
		[].slice.call(_c.TARGET).forEach(function(event, index) {
			_c.G_ARRAY[index] = new circleSet({
				target: event,
			});
			_c.G_ARRAY[index].set();
		});
	}
}

class circleSet {
	constructor(op) {
		let _t = this;
			_t.tg = op.target;
	}
	set() {
		let _t = this;
			console.log(_t.tg);
			
			_t.context = _t.tg.getContext("2d") ;
			_t.START_ANGLE = ( 0 * Math.PI) / 180;
			_t.END_R = 240;
			_t.LINE_WIDTH = 3;
			_t.CIRCLE_R = _t.tg.width/2;
			_t.ADD = 4;

			render();

			function render() {
				_t.END_ANGLE  = (_t.END_R * Math.PI) / 180;
				_t.context.clearRect(0,0,_t.tg.width, _t.tg.height);

				_t.context.beginPath();
				_t.context.arc( _t.CIRCLE_R, _t.CIRCLE_R, _t.CIRCLE_R  - _t.LINE_WIDTH, _t.START_ANGLE, _t.END_ANGLE, false ) ;
				var grd = _t.context.createLinearGradient(0, 0, _t.CIRCLE_R*2, _t.CIRCLE_R*2);
				grd.addColorStop(0, 'rgb(255, 0, 0)');
				grd.addColorStop(1.0, 'rgb(0, 0, 255)');
				_t.context.strokeStyle = grd;
				_t.context.lineWidth = _t.LINE_WIDTH ;
				_t.context.stroke();
			}

			$(_t.tg).parents('.m-canvasCircle01').on('mouseenter',function(){
				// console.log("enter");
				cancelAnimationFrame(_t.animation);
				_t.animation = requestAnimationFrame( circle_plus );
			})

			$(_t.tg).parents('.m-canvasCircle01').on('mouseleave',function(){
				// console.log("leave");
				cancelAnimationFrame(_t.animation);
				_t.animation = requestAnimationFrame( circle_minus );
			})

			function circle_plus() {
				_t.animation = requestAnimationFrame( circle_plus );
				if(_t.END_R<=360) {
					_t.END_R += _t.ADD;
				} else {
					cancelAnimationFrame(_t.animation);
				}
				// console.log("loop");
				render();
			}

			function circle_minus() {
				_t.animation = requestAnimationFrame( circle_minus );
				if(_t.END_R>=240) {
					_t.END_R += -_t.ADD;
				} else {
					// _t.animation = undefined;
					cancelAnimationFrame(_t.animation);
					// console.log("stop");
				}
				// console.log("loop");
				render();
			}

	}
}

export default function(op) {
	window.C_CANVASCIRCLE.init(op);
}

