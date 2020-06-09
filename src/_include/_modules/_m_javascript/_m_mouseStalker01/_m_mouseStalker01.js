
window.C_MOUSE_STARKER = {
	TARGET: null,
	DEFAULT: {
		targetClass: '.m-mouseStalker01',
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
			_t.canvas = _t.tg.querySelector('canvas');
	}
	set() {
		let _t = this;
		
			_t.context = _t.canvas.getContext("2d");
			
			function init() {
				render();
				mouseMove();
			}

			function render() {
				_t.START_ANGLE = ( 0 * Math.PI) / 180;
				_t.END_ANGLE  = (360 * Math.PI) / 180;
				_t.CIRCLE_R = _t.canvas.width/2;

				_t.context.fillStyle = "red";

				_t.context.clearRect(0,0,_t.tg.width, _t.tg.height);
				_t.context.beginPath();
				_t.context.arc( _t.CIRCLE_R, _t.CIRCLE_R, _t.CIRCLE_R, _t.START_ANGLE, _t.END_ANGLE, false ) ;
				_t.context.fill();
			}

			function mouseMove() {
				document.addEventListener('mousemove', function (e) {
					_t.tg.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
				});
			}

			init();
	}
}

export default function(op) {
	window.C_MOUSE_STARKER.init(op);
}

