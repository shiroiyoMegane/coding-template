const initFunc = require('../../_modules/_m_javascript/_m_initFunc/_m_initFunc.js');
const canvasLoading = require('../../_modules/_m_javascript/_m_canvasLoading/_m_canvasLoading.js');


const alphabetMaskFunc = () => {
	const init = () => {
		let funcTarget = new logoSet({
			tg: document.querySelector('#js-alphabetMask')
		});
		funcTarget.set();
	}
	class logoSet {
		constructor(op) {
			let _t = this;
				_t.target = op.tg;
				_t.C_WIDTH = 500;
				_t.C_HEIGHT = 500;
		}
		set() {
			let _t = this;
			const callSet = () => {
				initSet();
				_t.scaleInit();
			}
			const initSet = () => {
				let _t = this;
				function set() {
					_t.stage = new createjs.Stage(_t.target);

					_t.container = new createjs.Container();
					_t.stage.addChild(_t.container);

					_t.graphic = new createjs.Shape();
					_t.graphic.graphics.f("#F00").dr(0,0,_t.C_WIDTH, _t.C_HEIGHT);
					_t.container.addChild(_t.graphic);

					_t.maskWrap = new createjs.Shape();
					// _t.maskWrap.set({
					// 	x        : 0,
					// 	y        : 0,
					// });
					_t.maskWrap.cache(0, 0, _t.C_WIDTH, _t.C_HEIGHT)

					_t.sSet = [
						{type: "mt", s: "231.47, 148.81"},
						{type: "bt", s: "205.84, 123.35, 159.47, 121.42, 125.06, 116.05000000000001"},
						{type: "lt", s: "125.06, 143.37"},
						{type: "bt", s: "76.12, 138.45, 68.14, 96, 94.86, 71.67"},
						{type: "bt", s: "125.1, 48.14, 185.51, 61.36, 206.35, 83.85"},
						{type: "lt", s: "249.73, 41"},
						{type: "bt", s: "217, 8.62, 173.24, -3.25, 119.91, 0.74"},
						{type: "bt", s: "-27.66, 14, -19.93, 207.07, 125.1, 207.28"},
						{type: "lt", s: "125.1, 180"},
						{type: "bt", s: "223.56, 181.27, 206.86, 276, 125.1, 268.65999999999997"},
						{type: "lt", s: "125.1, 296"},
						{type: "bt", s: "94.17999999999999, 295.36, 65.69, 287.75, 44.459999999999994, 266.51"},
						{type: "lt", s: "0, 310.89"},
						{type: "bt", s: "33.83, 345.21, 73.38, 356.77, 125.06, 357.24"},
						{type: "lt", s: "125.06, 33"},
						{type: "bt", s: "280.78, 330.43, 276.88, 190.43, 231.47, 148.8"}
					];
					_t.sx = 0;
					_t.sy = 0;
					_t.ss = 0.5;
					_t.s = _t.maskWrap.graphics
						.mt((231.47+_t.sx)*_t.ss, (148.81+_t.sy)*_t.ss)
						.bt((205.84+_t.sx)*_t.ss, (123.35+_t.sy)*_t.ss, (159.47+_t.sx)*_t.ss, (121.42+_t.sy)*_t.ss, (125.06+_t.sx)*_t.ss, (116.05000000000001+_t.sy)*_t.ss)
						.lt((125.06+_t.sx)*_t.ss, (143.37+_t.sy)*_t.ss)
						.bt((76.12+_t.sx)*_t.ss, (138.45+_t.sy)*_t.ss, (68.14+_t.sx)*_t.ss, (96+_t.sy)*_t.ss, (94.86+_t.sx)*_t.ss, (71.67+_t.sy)*_t.ss)
						.bt((125.1+_t.sx)*_t.ss, (48.14+_t.sy)*_t.ss, (185.51+_t.sx)*_t.ss, (61.36+_t.sy)*_t.ss, (206.35+_t.sx)*_t.ss,( 83.85+_t.sy)*_t.ss)
						.lt((249.73+_t.sx)*_t.ss, (41+_t.sy)*_t.ss)
						.bt((217+_t.sx)*_t.ss, (8.62+_t.sy)*_t.ss, (173.24+_t.sx)*_t.ss, (-3.25+_t.sy)*_t.ss, (119.91+_t.sx)*_t.ss, (0.74+_t.sy)*_t.ss)
						.bt((-27.66+_t.sx)*_t.ss, (14+_t.sy)*_t.ss, (-19.93+_t.sx)*_t.ss, (207.07+_t.sy)*_t.ss, (125.1+_t.sx)*_t.ss, (207.28+_t.sy)*_t.ss)
						.lt((125.1+_t.sx)*_t.ss, (180+_t.sy)*_t.ss)
						.bt((223.56+_t.sx)*_t.ss, (181.27+_t.sy)*_t.ss, (206.86+_t.sx)*_t.ss, (276+_t.sy)*_t.ss, (125.1+_t.sx)*_t.ss, (268.65999999999997+_t.sy)*_t.ss)
						.lt((125.1+_t.sx)*_t.ss, (296+_t.sy)*_t.ss)
						.bt((94.17999999999999+_t.sx)*_t.ss, (295.36+_t.sy)*_t.ss, (65.69+_t.sx)*_t.ss, (287.75+_t.sy)*_t.ss, (44.459999999999994+_t.sx)*_t.ss, (266.51+_t.sy)*_t.ss)
						.lt((0+_t.sx)*_t.ss, (310.89+_t.sy)*_t.ss)
						.bt((33.83+_t.sx)*_t.ss, (345.21+_t.sy)*_t.ss, (73.38+_t.sx)*_t.ss, (356.77+_t.sy)*_t.ss, (125.06+_t.sx)*_t.ss, (357.24+_t.sy)*_t.ss)
						.lt((125.06+_t.sx)*_t.ss, (330+_t.sy)*_t.ss)
						.bt((280.78+_t.sx)*_t.ss, (330.43+_t.sy)*_t.ss, (276.88+_t.sx)*_t.ss, (190.43+_t.sy)*_t.ss, (231.47+_t.sx)*_t.ss, (148.81+_t.sy)*_t.ss)
						.closePath().command;
					
					_t.container.set({
						mask : _t.maskWrap
					});
					
					createjs.Ticker.addEventListener('tick', update , false);
					createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
					function update() {
						_t.stage.update();
					}
				}
				set();

				
			}
			callSet();
		}
		scaleInit() {
			let _t = this;
			function set() {
				_t.stage.canvas.width = _t.C_WIDTH;
				_t.stage.canvas.height = _t.C_HEIGHT;
			}
			set();
		}
	}
	init();
}

const nxpgLogoFunc = () => {
	let logoTarget;
	const init = () => {
		logoTarget = new logoSet({
			tg: document.querySelector('#js-logoTarget')
		});
		logoTarget.set();
	}
	class logoSet {
		constructor(op) {
			let _t = this;
				_t.target = op.tg;
				_t.queue = new createjs.LoadQueue(false);
				_t.imageArray = [
					{src:"../images/sample01.jpg"},
				];
				_t.imagePath = {};
		}
		set() {
			let _t = this;
			const initSet = () => {
				_t.stageTarget = new createjs.Stage(_t.target);
				createjs.Ticker.addEventListener('tick', update , false);
				createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
				$.each(_t.imageArray, function(index, val) {
					_t.imagePath[index] = new Image();
					_t.imagePath[index].src = val.src;
					val.width = _t.imagePath[index].naturalWidth;
					val.height = _t.imagePath[index].naturalHeight;
				});
				_t.queue.loadManifest(_t.imageArray);
				_t.queue.setMaxConnections(3);
				_t.queue.addEventListener('complete', (e) => {
					scaleInit();
					drawInit();
					tweenInit();
				});
				function update() {
					_t.stageTarget.update();
				}
			}
			const scaleInit = () => {
				function set() {
					_t.stageTarget.canvas.width = 500;
					_t.stageTarget.canvas.height = 500;
				}
				set();
				window.addEventListener("resize", set);
			}
			const drawInit = () => {
				let _t = this;
					_t.containerTarget = new createjs.Container();
					_t.graphicTarget = new createjs.Shape();
					_t.imageTarget = new createjs.Bitmap(_t.imageArray[0].src);
					_t.maskTarget = new createjs.Shape();
					
					_t.stageTarget.addChild(_t.containerTarget);
					_t.containerTarget.addChild(_t.graphicTarget);
					_t.containerTarget.addChild(_t.imageTarget);

					_t.imageTarget.x = 0;
					_t.imageTarget.y = 0;
					_t.imageTarget.scale = 0.3;

					_t.maskTarget.set({
						x        : 0,
						y        : 0,
						scaleX: 1.0,
						scaleY: 1.0
					});

					_t.point0101 = _t.maskTarget.graphics.moveTo(0,0).command;
					_t.point0102 = _t.maskTarget.graphics.lineTo(25, 0).command;
					_t.point0103 = _t.maskTarget.graphics.lineTo(25, 0).command;
					_t.point0104 = _t.maskTarget.graphics.lineTo(0, 0).command;
					_t.maskTarget.graphics.closePath().command;

					_t.point0201 = _t.maskTarget.graphics.moveTo(50,60).command;
					_t.point0202 = _t.maskTarget.graphics.lineTo(75, 60).command;
					_t.point0203 = _t.maskTarget.graphics.lineTo(75, 60).command;
					_t.point0204 = _t.maskTarget.graphics.lineTo(50, 60).command;
					_t.maskTarget.graphics.closePath().command;

					_t.point0301 = _t.maskTarget.graphics.moveTo(100,0).command;
					_t.point0302 = _t.maskTarget.graphics.lineTo(125, 0).command;
					_t.point0303 = _t.maskTarget.graphics.lineTo(125, 0).command;
					_t.point0304 = _t.maskTarget.graphics.lineTo(100, 0).command;
					_t.maskTarget.graphics.closePath().command;

					_t.point0401 = _t.maskTarget.graphics.moveTo(150,0).command;
					_t.point0402 = _t.maskTarget.graphics.lineTo(175, 0).command;
					_t.point0403 = _t.maskTarget.graphics.lineTo(175, 0).command;
					_t.point0404 = _t.maskTarget.graphics.lineTo(150, 0).command;
					_t.maskTarget.graphics.closePath().command;
					
					_t.graphicTarget.graphics.beginFill("#000000").drawRect(0,0,_t.stageTarget.canvas.width, _t.stageTarget.canvas.height);
					_t.containerTarget.set({
						mask : _t.maskTarget
					});
			}

			const tweenInit = () => {
				let _t = this;
					function logo01() {
						createjs.Tween.get(_t.point0103, {override:true})
							.to({y:0}, 0)
							.to({y:120}, 600, createjs.Ease.cubicOut);
						createjs.Tween.get(_t.point0104, {override:true})
							.to({y:0}, 0)
							.to({y:120}, 600, createjs.Ease.cubicOut)
							.call(logo02);
					}
					function logo02() {
						createjs.Tween.get(_t.point0203, {override:true})
							.to({y:60}, 0)
							.to({y:180}, 600, createjs.Ease.cubicOut);
						createjs.Tween.get(_t.point0204, {override:true})
							.to({y:60}, 0)
							.to({y:180}, 600, createjs.Ease.cubicOut)
							.call(logo03);
					}
					function logo03() {
						createjs.Tween.get(_t.point0303, {override:true})
							.to({y:0}, 0)
							.to({y:120}, 600, createjs.Ease.cubicOut);
						createjs.Tween.get(_t.point0304, {override:true})
							.to({y:0}, 0)
							.to({y:120}, 600, createjs.Ease.cubicOut)
							.call(logo04);
					}
					function logo04() {
						createjs.Tween.get(_t.point0403, {override:true})
							.to({y:0}, 0)
							.to({y:60}, 600, createjs.Ease.cubicOut);
						createjs.Tween.get(_t.point0404, {override:true})
							.to({y:0}, 0)
							.to({y:60}, 600, createjs.Ease.cubicOut);
					}
					logo01();
			}
			initSet();
		}
	}
	init();
}

const canvasLoadingFunc = () => {
	let canvasLoadingTarget;
	const init = () => {
		canvasLoadingTarget = new canvasLoading({
			tg: document.querySelector('#js-canvasLoadingAnimation')
		});
		canvasLoadingTarget.set();
	}

	$('#type01_start').on('click',function(){
		canvasLoadingTarget.type01_start();
	});
	$('#type01_end').on('click',function(){
		canvasLoadingTarget.type01_end();
	});
	$('#type02_start').on('click',function(){
		canvasLoadingTarget.type02_start();
	});
	$('#type02_end').on('click',function(){
		canvasLoadingTarget.type02_end();
	});
	$('#type03_start').on('click',function(){
		canvasLoadingTarget.type03_start();
	});
	$('#type03_end').on('click',function(){
		canvasLoadingTarget.type03_end();
	});
	$('#type04_start').on('click',function(){
		canvasLoadingTarget.type04_start();
	});
	$('#type04_end').on('click',function(){
		canvasLoadingTarget.type04_end();
	});
	$('#type05_start').on('click',function(){
		canvasLoadingTarget.type05_start();
	});
	$('#type05_end').on('click',function(){
		canvasLoadingTarget.type05_end();
	});
	init();
}


// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		canvasLoadingFunc();
		nxpgLogoFunc();
		alphabetMaskFunc();
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option, 'is-canvas');
}