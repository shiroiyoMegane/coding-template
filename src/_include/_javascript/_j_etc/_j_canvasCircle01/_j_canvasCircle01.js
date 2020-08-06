
window.C_CANVASCIRCLE = {
	TARGET: null,
	DEFAULT: {
		targetClass: '.js-canvasCircle01',
		parentClass: '.m-canvasCircle01',
		CIRCLE_START: 90,
		CIRCLE_END: 320,
		MAX_END: 800,
		LINE_WIDTH: 6,
		ADD_NUM: 8,
		START_COLOR: 'rgb(255, 0, 0)',
		END_COLOR: 'rgb(0, 0, 255)',
	},
	G_ARRAY: {},
	init: function(op){
		let _c = this;
			_c.TARGET = document.querySelectorAll(_c.DEFAULT.targetClass);
		[].slice.call(_c.TARGET).forEach(function(event, index) {
			_c.DEFAULT.target = event;
			_c.G_ARRAY[index] = new circleSet(_c.DEFAULT);
			_c.G_ARRAY[index].set();
		});
	}
}

class circleSet {
	constructor(op) {
		let _t = this;
			_t.tg = op.target;
			_t.parentClass = op.parentClass;
			_t.END_VAL = op.CIRCLE_END;
			_t.START_VAL = op.CIRCLE_START;
			_t.MAX_END = op.MAX_END;
			_t.LINE_WIDTH = op.LINE_WIDTH;
			_t.ADD = op.ADD_NUM;
			_t.START_COLOR = op.START_COLOR;
			_t.END_COLOR = op.END_COLOR;
	}
	set() {
		let _t = this;
			
			_t.context = _t.tg.getContext("2d");
			
			_t.START_R = _t.START_VAL;
			_t.END_R = _t.END_VAL;
			_t.CIRCLE_R = _t.tg.width/2;

			function init() {
				render();
				mouseFunc();
			}

			function render() {
				
				createCircle();
			}

			function createCircle() {
				_t.START_ANGLE = ( _t.START_R * Math.PI) / 180;
				_t.END_ANGLE  = (_t.END_R * Math.PI) / 180;

				_t.context.clearRect(0,0,_t.tg.width, _t.tg.height);
				_t.context.beginPath();
				_t.context.arc( _t.CIRCLE_R, _t.CIRCLE_R, _t.CIRCLE_R  - _t.LINE_WIDTH, _t.START_ANGLE, _t.END_ANGLE, false ) ;
				var grd = _t.context.createLinearGradient(0, 0, _t.CIRCLE_R*2, _t.CIRCLE_R*2);
				grd.addColorStop(0, _t.START_COLOR);
				grd.addColorStop(1.0, _t.END_COLOR);
				_t.context.strokeStyle = grd;
				_t.context.lineWidth = _t.LINE_WIDTH ;
				_t.context.stroke();
			}

			function mouseFunc() {
				$(_t.tg).parents(_t.parentClass).on('mouseenter',function(){
					cancelAnimationFrame(_t.animation);
					_t.animation = requestAnimationFrame( circle_plus );
				})
	
				$(_t.tg).parents(_t.parentClass).on('mouseleave',function(){
					cancelAnimationFrame(_t.animation);
					_t.animation = requestAnimationFrame( circle_minus );
				})
			}

			function circle_plus() {
				_t.animation = requestAnimationFrame( circle_plus );
				if(_t.END_R <= _t.MAX_END) {
					_t.END_R += _t.ADD;
					_t.START_R += _t.ADD*0.65;
				} else {
					cancelAnimationFrame(_t.animation);
				}
				render();
			}

			function circle_minus() {
				_t.animation = requestAnimationFrame( circle_minus );
				if(_t.END_R>=_t.END_VAL) {
					_t.END_R += -_t.ADD;
					_t.START_R += - _t.ADD*0.65;
				} else {
					cancelAnimationFrame(_t.animation);
				}
				render();
			}

			init();
	}
}

export default function(op) {
	window.C_CANVASCIRCLE.init(op);
}

