//ua 判定
module.exports = () => {

	window.C_SLIDER01 = {
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
		IMAGE_ARRAY: {},
		SLIDE_ARRAY: {},
		CLICK_FLAG: true,
		func:{
			init:function(){
				C_SLIDER01.LOADER = PIXI.loader;
				
				//アプリケーション ----------------------------------------------------------------------------------------------------------------------
				function init() {
					C_SLIDER01.APP = new PIXI.Application({ 
						view : document.querySelector(C_SLIDER01.MAIN_CANVAS),
						width: C_SLIDER01.DEVICE_WIDTH,         // default: 800
						height: C_SLIDER01.DEVICE_HEIGHT,        // default: 600
						antialias: true,    // default: false
						transparent: false, // default: false
						resolution: 1,       // default: 1
						forceCanvas: true //canvasMode
					});
					C_SLIDER01.APP.renderer.autoResize = true;
					C_SLIDER01.APP.stage.interactive = true;

					$(C_SLIDER01.TARGET).find('.slide').each(function(index){
						C_SLIDER01.IMAGE_ARRAY[index] = {};
						C_SLIDER01.IMAGE_ARRAY[index].pcImage = window.innerWidth <= C_SLIDER01.BREAKPOINT ? $(this).data(C_SLIDER01.DATA_SP_IMAGE_NAME) : $(this).data(C_SLIDER01.DATA_PC_IMAGE_NAME);
					});
					
					$.each(C_SLIDER01.IMAGE_ARRAY, function(index, val) {
						C_SLIDER01.LOADER
							.add("pcbg"+index , val.pcImage)
							
					});
					C_SLIDER01.LOADER.load((loader, resources) => {
						C_SLIDER01.func.loaderAfter(loader, resources);
						C_SLIDER01.func.resize();
					});
				}
				init();
			},
			loaderAfter:function(ld, res){
				// 画像読み込み完了後 ---------------------------------------------------------------------------------------------------------------
				C_SLIDER01.func.sliderBg(ld, res);
				C_SLIDER01.func.statusFunc();
				C_SLIDER01.func.pagerSet();
				C_SLIDER01.func.textSlideSet();
				C_SLIDER01.SLIDE_ARRAY[C_SLIDER01.CURRENT_SLIDE].scaleStart();

				C_SLIDER01.APP.ticker.speed = 60;
				C_SLIDER01.APP.ticker.add((delta) => {
					PIXI.tweenManager.update();
				});
			},
			resize:function(){
				// リサイズ ---------------------------------------------------------------------------------------------------------------
				$(window).on('load resize',function(){
					C_SLIDER01.DEVICE_WIDTH = window.innerWidth;
					C_SLIDER01.DEVICE_HEIGHT = window.innerHeight;
					C_SLIDER01.APP.renderer.resize(C_SLIDER01.DEVICE_WIDTH, C_SLIDER01.DEVICE_HEIGHT);
					C_SLIDER01.STATUS_BAR.reset();
					$.each(C_SLIDER01.SLIDE_ARRAY, function(index, val) {
						val.reset();
					});
					$(C_SLIDER01.TARGET).css({
						height: C_SLIDER01.DEVICE_HEIGHT
					})
				});
			},
			pagerSet:function(){
				// ページャー ---------------------------------------------------------------------------------------------------------------
				$(C_SLIDER01.TARGET).find(C_SLIDER01.PAGER_AREA).on('click','.pager',function(){
					if(C_SLIDER01.CLICK_FLAG == true) {
						C_SLIDER01.SLIDE_ARRAY[ C_SLIDER01.CURRENT_SLIDE ].end();
						C_SLIDER01.CLICK_FLAG = false;
						if($(this).hasClass('is-left')) {
							C_SLIDER01.CURRENT_SLIDE = C_SLIDER01.CURRENT_SLIDE <= 0 ? Object.keys(C_SLIDER01.IMAGE_ARRAY).length - 1 : C_SLIDER01.CURRENT_SLIDE - 1 ;
							// console.log(C_SLIDER01.CURRENT_SLIDE);
						} else if($(this).hasClass('is-right')) {
							// console.log(C_SLIDER01.CURRENT_SLIDE);
							C_SLIDER01.CURRENT_SLIDE = C_SLIDER01.CURRENT_SLIDE >= Object.keys(C_SLIDER01.IMAGE_ARRAY).length - 1 ? 0 : C_SLIDER01.CURRENT_SLIDE + 1 ;
						}
						$(C_SLIDER01.TARGET).find(C_SLIDER01.TEXT_AREA).slick('slickGoTo', C_SLIDER01.CURRENT_SLIDE);
						C_SLIDER01.SLIDE_ARRAY[ C_SLIDER01.CURRENT_SLIDE ].start();
					}
				});
			},
			statusFunc: function() {
				// ステータスバー ---------------------------------------------------------------------------------------------------------------
				function init() {
					C_SLIDER01.STATUS_BAR = new statusSet();
					C_SLIDER01.STATUS_BAR.set();
					C_SLIDER01.STATUS_BAR.tween();
				}
				class statusSet {
					constructor(op) {
						let _t = this;
					}
					set() {
						let _t = this;
						_t.Graphics_bar = new PIXI.Graphics();
						C_SLIDER01.APP.stage.addChild(_t.Graphics_bar);
						_t.Graphics_bar.x = 0;
						_t.Graphics_bar.y = 0;
						_t.Graphics_bar.beginFill(0xD04539);
						window.innerWidth <= C_SLIDER01.BREAKPOINT ? _t.Graphics_bar.drawRect(0, 0, C_SLIDER01.DEVICE_WIDTH, 4) : _t.Graphics_bar.drawRect(0, 0, C_SLIDER01.DEVICE_WIDTH, 6);
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
						_t.Tween_bar.time = C_SLIDER01.DURATION;
						_t.Tween_bar.easing = PIXI.tween.Easing.linear();
						_t.Tween_bar.start();
						_t.Tween_bar.on('end', ( loopCount ) => {
							
							C_SLIDER01.SLIDE_ARRAY[ C_SLIDER01.CURRENT_SLIDE ].end();
							C_SLIDER01.SLIDE_ARRAY[ C_SLIDER01.CURRENT_SLIDE >= Object.keys(C_SLIDER01.IMAGE_ARRAY).length - 1 ? 0 : C_SLIDER01.CURRENT_SLIDE + 1].start();
							$(C_SLIDER01.TARGET).find(C_SLIDER01.TEXT_AREA).slick('slickGoTo', C_SLIDER01.CURRENT_SLIDE >= Object.keys(C_SLIDER01.IMAGE_ARRAY).length - 1 ? 0 : C_SLIDER01.CURRENT_SLIDE + 1);
							C_SLIDER01.CURRENT_SLIDE = C_SLIDER01.CURRENT_SLIDE >= Object.keys(C_SLIDER01.IMAGE_ARRAY).length - 1 ? 0 : C_SLIDER01.CURRENT_SLIDE + 1 ;
							
							_t.Graphics_bar.scale.x = 0;
						});
					}
					reset() {
						let _t = this;
						
						_t.Graphics_bar.clear();
						window.innerWidth <= C_SLIDER01.BREAKPOINT ? _t.Graphics_bar.drawRect(0, 0, C_SLIDER01.DEVICE_WIDTH, 4) : _t.Graphics_bar.drawRect(0, 0, C_SLIDER01.DEVICE_WIDTH, 6);
						
						_t.Tween_bar.reset();
						_t.Tween_bar.start();
						
					}
				}
				init();
			},
			sliderBg:function(ld, res){
				// 背景画像 ---------------------------------------------------------------------------------------------------------------
				function init() {
					let ct = 0;
					$.each(res, function(index, val) {
						C_SLIDER01.SLIDE_ARRAY[ct] = new bgSet({
							tg: val,
							name: index,
							no: ct,
						});
						C_SLIDER01.SLIDE_ARRAY[ct].set();
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
							C_SLIDER01.APP.stage.addChild(_t.Container_main);
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
							_t.Graphics_mask.x = _t.no == C_SLIDER01.CURRENT_SLIDE ? 0 : - C_SLIDER01.DEVICE_WIDTH;
							_t.Graphics_mask.y = 0;
							_t.Graphics_mask.drawRect(0, 0, C_SLIDER01.DEVICE_WIDTH, _t.Container_main.height);
							_t.Container_main.mask = _t.Graphics_mask;
					}
					imageSize(op) {
						let _t = this;
							op.tg.position.x = C_SLIDER01.DEVICE_WIDTH / 2;
							op.tg.position.y = C_SLIDER01.DEVICE_HEIGHT / 2;
							op.tg.anchor.set(0.5, 0.5);
			
							if(_t.imageHeight * C_SLIDER01.DEVICE_WIDTH /  _t.imageWidth < C_SLIDER01.DEVICE_HEIGHT) {
								op.tg.scale.x = (C_SLIDER01.DEVICE_HEIGHT / _t.imageHeight);
								op.tg.scale.y = op.tg.scale.x;
							} else {
								op.tg.scale.x = (C_SLIDER01.DEVICE_WIDTH / _t.imageWidth);
								op.tg.scale.y = op.tg.scale.x;
							}
							_t.imageScale = op.tg.scale.x;
					}
					tween(op) {
						let _t = this;
							_t.Tween_maskStart = PIXI.tweenManager.createTween(_t.Graphics_mask);
							_t.Tween_maskStart
								.from({ x: - C_SLIDER01.DEVICE_WIDTH })
								.to({ x: 0 })
								_t.Tween_maskStart.time = C_SLIDER01.SPEED;
								_t.Tween_maskStart.easing = PIXI.tween.Easing.linear();
							
							_t.Tween_maskEnd = PIXI.tweenManager.createTween(_t.Graphics_mask);
							_t.Tween_maskEnd
								.from({ x: 0 })
								.to({ x: C_SLIDER01.DEVICE_WIDTH })
								_t.Tween_maskEnd.time = C_SLIDER01.SPEED;
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
								_t.Tween_imageScale.time = C_SLIDER01.SPEED;
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
								C_SLIDER01.STATUS_BAR.reset();
								C_SLIDER01.CLICK_FLAG = true;
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
			textSlideSet:function(){
				// テキストスライダー ---------------------------------------------------------------------------------------------------------------
				$(C_SLIDER01.TARGET).find(C_SLIDER01.TEXT_AREA).slick({
					arrows: true,
					appendArrows: $(C_SLIDER01.TARGET).find(C_SLIDER01.PAGER_AREA),
					prevArrow: C_SLIDER01.PREV_ARROW,
					nextArrow: C_SLIDER01.NEXT_ARROW,
					fade: true,
				});
			},
			
			
			
		}
	}
	
	window.C_SLIDER01.func.init();
}