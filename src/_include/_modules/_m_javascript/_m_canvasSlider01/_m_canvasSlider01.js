//ua 判定
module.exports = () => {

	window.C_SLIDER01 = {
		LOADER: null,
		STATUS_BAR: null,
		IMAGE_ARRAY: {},
		SLIDE_ARRAY: {},
		DEVICE_WIDTH: window.innerWidth,
		DEVICE_HEIGHT: window.innerHeight,
		TARGET: '.c_canvasSliderSet01',
		MAIN_CANVAS: '.c_canvasSliderSet01 .canvasMain',
		SPEED: 600,
		DURATION: 5000,
		CURRENT_SLIDE: 0,
		BREAKPOINT: 768,
		DATA_PC_IMAGE_NAME: 'pcimage',
		DATA_SP_IMAGE_NAME: 'spimage',
		PAGER_AREA: '.btnBlock',
		PREV_ARROW: '<p class="pager is-left"><span><</span></p>',
		NEXT_ARROW: '<p class="pager is-right"><span>></span></p>',
		TEXT_AREA: '.textBlock',
		CLICK_FLAG: true,
		FUNC:{
			init: function(_c){
				_c.LOADER = PIXI.loader;
				
				//アプリケーション ----------------------------------------------------------------------------------------------------------------------
				function init() {
					_c.APP = new PIXI.Application({ 
						view : document.querySelector(_c.MAIN_CANVAS),
						width: _c.DEVICE_WIDTH,         // default: 800
						height: _c.DEVICE_HEIGHT,        // default: 600
						antialias: true,    // default: false
						transparent: false, // default: false
						resolution: 1,       // default: 1
						forceCanvas: true //canvasMode
					});
					_c.APP.renderer.autoResize = true;
					_c.APP.stage.interactive = true;

					$(_c.TARGET).find('.slide').each(function(index){
						_c.IMAGE_ARRAY[index] = {};
						_c.IMAGE_ARRAY[index].pcImage = window.innerWidth <= _c.BREAKPOINT ? $(this).data(_c.DATA_SP_IMAGE_NAME) : $(this).data(_c.DATA_PC_IMAGE_NAME);
					});
					_c.IMAGE_ARRAY_LENGTH = _c.IMAGE_ARRAY_LENGTH;
					
					$.each(_c.IMAGE_ARRAY, function(index, val) {
						_c.LOADER
							.add("pcbg"+index , val.pcImage)
							
					});
					_c.LOADER.load((loader, resources) => {
						_c.FUNC.loaderAfter(loader, resources, _c);
						_c.FUNC.resize(_c);
					});
				}
				init();
			},
			loaderAfter: function(ld, res, _c){
				// 画像読み込み完了後 ---------------------------------------------------------------------------------------------------------------
				_c.FUNC.sliderBg(ld, res, _c);
				_c.FUNC.statusFunc(_c);
				_c.FUNC.pagerSet(_c);
				_c.FUNC.textSlideSet(_c);
				_c.SLIDE_ARRAY[_c.CURRENT_SLIDE].scaleStart();

				_c.APP.ticker.speed = 60;
				_c.APP.ticker.add((delta) => {
					PIXI.tweenManager.update();
				});
			},
			resize: function(_c){
				// リサイズ ---------------------------------------------------------------------------------------------------------------
				$(window).on('load resize',function(){
					_c.DEVICE_WIDTH = window.innerWidth;
					_c.DEVICE_HEIGHT = window.innerHeight;
					_c.APP.renderer.resize(_c.DEVICE_WIDTH, _c.DEVICE_HEIGHT);
					_c.STATUS_BAR.reset();
					$.each(_c.SLIDE_ARRAY, function(index, val) {
						val.reset();
					});
					$(_c.TARGET).css({
						height: _c.DEVICE_HEIGHT
					})
				});
			},
			pagerSet: function(_c){
				// ページャー ---------------------------------------------------------------------------------------------------------------
				$(_c.TARGET).find(_c.PAGER_AREA).on('click','.pager',function(){
					if(_c.CLICK_FLAG == true) {
						_c.SLIDE_ARRAY[ _c.CURRENT_SLIDE ].end();
						_c.CLICK_FLAG = false;
						if($(this).hasClass('is-left')) {
							_c.CURRENT_SLIDE = _c.CURRENT_SLIDE <= 0 ? _c.IMAGE_ARRAY_LENGTH : _c.CURRENT_SLIDE - 1 ;
							// console.log(_c.CURRENT_SLIDE);
						} else if($(this).hasClass('is-right')) {
							// console.log(_c.CURRENT_SLIDE);
							_c.CURRENT_SLIDE = _c.CURRENT_SLIDE >= _c.IMAGE_ARRAY_LENGTH ? 0 : _c.CURRENT_SLIDE + 1 ;
						}
						$(_c.TARGET).find(_c.TEXT_AREA).slick('slickGoTo', _c.CURRENT_SLIDE);
						_c.SLIDE_ARRAY[ _c.CURRENT_SLIDE ].start();
					}
				});
			},
			statusFunc: function(_c) {
				// ステータスバー ---------------------------------------------------------------------------------------------------------------
				function init() {
					_c.STATUS_BAR = new statusSet();
					_c.STATUS_BAR.set();
					_c.STATUS_BAR.tween();
				}
				class statusSet {
					constructor(op) {
						let _t = this;
					}
					set() {
						let _t = this;
							_t.Graphics_bar = new PIXI.Graphics();
							_c.APP.stage.addChild(_t.Graphics_bar);
							_t.Graphics_bar.x = 0;
							_t.Graphics_bar.y = 0;
							_t.Graphics_bar.beginFill(0xD04539);
							window.innerWidth <= _c.BREAKPOINT ? _t.Graphics_bar.drawRect(0, 0, _c.DEVICE_WIDTH, 4) : _t.Graphics_bar.drawRect(0, 0, _c.DEVICE_WIDTH, 6);
					}
					tween() {
						let _t = this;
							_t.Tween_bar = PIXI.tweenManager.createTween(_t.Graphics_bar);
							_t.Tween_bar
								.from({
									scale: {
										x: 0
									}
								})
								.to({
									scale: {
										x: 1
									}
								});
							_t.Tween_bar.time = _c.DURATION;
							_t.Tween_bar.easing = PIXI.tween.Easing.linear();
							_t.Tween_bar.start();
							_t.Tween_bar.on('end', ( loopCount ) => {
								
								_c.SLIDE_ARRAY[ _c.CURRENT_SLIDE ].end();
								_c.SLIDE_ARRAY[ _c.CURRENT_SLIDE >= _c.IMAGE_ARRAY_LENGTH ? 0 : _c.CURRENT_SLIDE + 1].start();
								$(_c.TARGET).find(_c.TEXT_AREA).slick('slickGoTo', _c.CURRENT_SLIDE >= _c.IMAGE_ARRAY_LENGTH ? 0 : _c.CURRENT_SLIDE + 1);
								_c.CURRENT_SLIDE = _c.CURRENT_SLIDE >= _c.IMAGE_ARRAY_LENGTH ? 0 : _c.CURRENT_SLIDE + 1 ;
								
								_t.Graphics_bar.scale.x = 0;
						});
					}
					reset() {
						let _t = this;
						
							_t.Graphics_bar.clear();
							window.innerWidth <= _c.BREAKPOINT ? _t.Graphics_bar.drawRect(0, 0, _c.DEVICE_WIDTH, 4) : _t.Graphics_bar.drawRect(0, 0, _c.DEVICE_WIDTH, 6);
							
							_t.Tween_bar.reset();
							_t.Tween_bar.start();
						
					}
				}
				init();
			},
			sliderBg: function(ld, res, _c){
				// 背景画像 ---------------------------------------------------------------------------------------------------------------
				function init() {
					let ct = 0;
						$.each(res, function(index, val) {
							_c.SLIDE_ARRAY[ct] = new bgSet({
								tg: val,
								name: index,
								no: ct,
							});
							_c.SLIDE_ARRAY[ct].set();
							ct++;
							
						});
				}
				class bgSet {
					constructor(op) {
						let _t = this;
							_t.target = op.tg;
							_t.name = op.name;
							_t.no = op.no;
							_t.image = _t.target.url;
							_t.imageWidth = _t.target.data.width;
							_t.imageHeight = _t.target.data.height;
					}
					set() {
						let _t = this;
							_t.Container_main = new PIXI.Container();
							_c.APP.stage.addChild(_t.Container_main);
							_t.Sprite_bg = new PIXI.Sprite(PIXI.Texture.fromImage(_t.image));
							_t.Container_main.addChild(_t.Sprite_bg);
							_t.Graphics_mask = new PIXI.Graphics();
							_t.Container_main.addChild(_t.Graphics_mask);
							_t.imageSize({
								tg: _t.Sprite_bg
							});
							_t.mask();
							_t.tween();
					}
					mask() {
						let _t = this;
							_t.Graphics_mask.clear();
							_t.Graphics_mask.x = _t.no == _c.CURRENT_SLIDE ? 0 : - _c.DEVICE_WIDTH;
							_t.Graphics_mask.y = 0;
							_t.Graphics_mask.drawRect(0, 0, _c.DEVICE_WIDTH, _t.Container_main.height);
							_t.Container_main.mask = _t.Graphics_mask;
					}
					imageSize(op) {
						let _t = this;
							op.tg.position.x = _c.DEVICE_WIDTH / 2;
							op.tg.position.y = _c.DEVICE_HEIGHT / 2;
							op.tg.anchor.set(0.5, 0.5);
			
							if(_t.imageHeight * _c.DEVICE_WIDTH /  _t.imageWidth < _c.DEVICE_HEIGHT) {
								op.tg.scale.x = (_c.DEVICE_HEIGHT / _t.imageHeight);
								op.tg.scale.y = op.tg.scale.x;
							} else {
								op.tg.scale.x = (_c.DEVICE_WIDTH / _t.imageWidth);
								op.tg.scale.y = op.tg.scale.x;
							}
							_t.imageScale = op.tg.scale.x;
					}
					tween(op) {
						let _t = this;
							_t.Tween_maskStart = PIXI.tweenManager.createTween(_t.Graphics_mask);
							_t.Tween_maskStart
								.from({ x: - _c.DEVICE_WIDTH })
								.to({ x: 0 })
								_t.Tween_maskStart.time = _c.SPEED;
								_t.Tween_maskStart.easing = PIXI.tween.Easing.linear();
							
							_t.Tween_maskEnd = PIXI.tweenManager.createTween(_t.Graphics_mask);
							_t.Tween_maskEnd
								.from({ x: 0 })
								.to({ x: _c.DEVICE_WIDTH })
								_t.Tween_maskEnd.time = _c.SPEED;
								_t.Tween_maskEnd.easing = PIXI.tween.Easing.linear();

							_t.Tween_imageScale = PIXI.tweenManager.createTween(_t.Sprite_bg);
							_t.Tween_imageScale
								.from({
									scale: {
										x: _t.imageScale*1.05,
										y: _t.imageScale*1.05
									}
								})
								.to({
									scale: {
										x: _t.imageScale,
										y: _t.imageScale,
									}
								});
								_t.Tween_imageScale.time = _c.SPEED;
								_t.Tween_imageScale.easing = PIXI.tween.Easing.linear();
					}
					scaleStart() {
						let _t = this;
							_t.Tween_imageScale.reset();
							_t.Tween_imageScale.start();
					}
					start(op) {
						let _t = this;
							_t.Tween_maskStart.reset();
							_t.Tween_maskStart.start();
							_t.scaleStart()
					}
					end(op) {
						let _t = this;
							_t.Tween_maskEnd.reset();
							_t.Tween_maskEnd.start();
							_t.Tween_maskEnd.on('end', ( loopCount ) => {
								_c.STATUS_BAR.reset();
								_c.CLICK_FLAG = true;
							});
					}
					reset() {
						let _t = this;
							_t.imageSize({
								tg: _t.Sprite_bg
							});
							_t.mask();
							_t.tween();
					}
				}
				init();
			},
			textSlideSet: function(_c){
				// テキストスライダー ---------------------------------------------------------------------------------------------------------------
				$(_c.TARGET).find(_c.TEXT_AREA).slick({
					arrows: true,
					appendArrows: $(_c.TARGET).find(_c.PAGER_AREA),
					prevArrow: _c.PREV_ARROW,
					nextArrow: _c.NEXT_ARROW,
					fade: true,
				});
			},
		}
	}
	
	window.C_SLIDER01.FUNC.init(C_SLIDER01);
}