!function(e){var t={};function r(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ua=navigator.userAgent,this.type="pc"}var t,c,a;return t=e,(c=[{key:"dvType",value:function(){return this.ua.indexOf("iPhone")>0||this.ua.indexOf("Android")>0&&this.ua.indexOf("Mobile")>0?this.type="sp":(this.ua.indexOf("iPad")>0||this.ua.indexOf("Android")>0)&&(this.type="tb"),this.type}}])&&r(t.prototype,c),a&&r(t,a),e}()},function(e,t){e.exports=function(e,t,r){var c=1,a=window.innerWidth;e.DOMReadBefore(t),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(t.PAGE_FLAG).className!=r&&void 0!==r||(e.DOMReadAfter(t),window.addEventListener("load",(function(){e.imageReadAfter(t)}),!1)),window.addEventListener("resize",(function(){c||(c=setTimeout((function(){if(c=0,"pc"!=t.UA){if(a==window.innerWidth)return;a=window.innerWidth,e.windowResize(t)}else e.windowResize(t)}),500))})),window.addEventListener("scroll",(function(){c||(c=setTimeout((function(){c=0,e.windowScroll(t)}),300))})),c=setTimeout((function(){c=0}),100)}),!1)}},function(e,t,r){"use strict";var c=r(3),a=r(4),i=r(12),n=r(0),o={W_WIDTH:window.innerWidth,SP_WIDTH:768,PC_WIDTH:1200,UA:(new n).dvType(),PAGE_FLAG:"html"};c(o),a(o),i(o)},function(e,t,r){function c(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var a=r(1),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}])&&c(t.prototype,r),a&&c(t,a),e}();e.exports=function(e){var t=new i;a(t,e)}},function(e,t,r){function c(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var a=r(1),i=r(5),n=r(6),o=r(7),s=r(8),p=r(9),y=r(10),h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){i(),n(),o(),s(),p(),y(),hljs.initHighlightingOnLoad()}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}])&&c(t.prototype,r),a&&c(t,a),e}();e.exports=function(e){var t=new h;a(t,e,"is-component")}},function(e,t,r){var c=this;e.exports=function(e){var t,a={className:".js-matchHeight",UA:(new(r(0))).dvType()},i=Object.assign(a,e),n=document.querySelectorAll(i.className);if(null!=n){var o=function(e){var t=this;t.offTop=0,[].slice.call(n).forEach((function(e,r){0!==t.offTop&&t.offTop!==e.getBoundingClientRect().top+window.pageYOffset&&y++,t.offTop=e.getBoundingClientRect().top+window.pageYOffset}));for(var r=0;r<=y;r++)e.push([]);s(e)},s=function(e){var t=this;t.offTop=0,[].slice.call(n).forEach((function(r,c){0!==t.offTop&&t.offTop!==r.getBoundingClientRect().top+window.pageYOffset&&arrayCount++,e[arrayCount].push(r),t.offTop=r.getBoundingClientRect().top+window.pageYOffset})),p(e)},p=function(e){var t=this;t.height=0;for(var r=function(r){t.height=0,e[r].forEach((function(c,a){if(0===a||a%e[r].length==0){for(var i=a;i<=a+a+e[r].length-1;i++)e[r][i].style.height="inherit";height=c.clientHeight;for(var n=a+1;n<=a+e[r].length-1;n++)t.height<e[r][n].clientHeight&&(t.height=e[r][n].clientHeight);for(var o=a;o<=a+a+e[r].length-1;o++)e[r][o].style.height=t.height+"px"}}))},c=0;c<=arrayCount;c++)r(c)},y=0;arrayCount=0;var h=function(e,t){e||(e=setTimeout((function(){e=0,t()}),100))};(t=c).timeoutId=1,t.array=[],t.currentWidth=window.innerWidth,o(t.array),window.addEventListener("resize",(function(){h(t.timeoutId,(function(){if("pc"!=i.UA){if(t.currentWidth==window.innerWidth)return;t.currentWidth=window.innerWidth,o(t.array)}else o(t.array)}))})),t.timeoutId=setTimeout((function(){t.timeoutId=0}),100)}}},function(e,t,r){e.exports=function(e){var t={className:".js-tellLink",UA:(new(r(0))).dvType()},c=Object.assign(t,e),a=document.querySelectorAll(c.className);"pc"==c.UA&&Array.prototype.slice.call(a).forEach((function(e){e.outerHTML=e.innerHTML}))}},function(e,t){var r=this;function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}e.exports=function(e){var t=Object.assign({target:".js-accordion",parentName:".js-accordion-parent",childName:".js-accordion-child",speed:300,timing:"ease",linkage:!0,collapsible:!0,setBefore:function(){},setAfter:function(){},animationAfter:function(){}},e),a={};fArray={},arrayLength=0;var n,o=function(){function e(r){c(this,e);var a=this;a.tg=r,a.targetParents=a.tg.querySelectorAll(t.parentName),a.arrayLength=a.targetParents.length}return i(e,[{key:"set",value:function(){var e=this;e.fArray={},[].slice.call(e.targetParents).forEach((function(t,r){e.fArray[r]=new s(t,e.fArray,e.arrayLength),e.fArray[r].set()}))}}]),e}(),s=function(){function e(r,a,i){c(this,e);var n=this;n.targetParent=r,n.targetParent.style.cursor="pointer",n.targetChild=r.nextElementSibling,n.targetChild.style.overflow="hidden",n.targetChild.style.transitionProperty="height",n.targetChild.style.transitionDuration=t.speed+"ms",n.targetChild.style.transitionTimingFunction=t.timing,n.clientH=n.targetChild.clientHeight,n.currentFlag=!1,n.array=a,n.arrayLength=i}return i(e,[{key:"set",value:function(){var e=this;t.setBefore(),e.targetParent.classList.contains("is-open")?e.open(e):e.close(e),e.targetParent.addEventListener("click",(function(){e.lastH=e.targetChild.style.height;for(var r=0;r<e.arrayLength;r++)e.array[r].currentFlag=!1;e.currentFlag=!0,"0px"==e.lastH?e.open():t.collapsible&&e.close(),t.linkage&&e.linkage()}),!1),e.targetChild.addEventListener("transitionend",(function(){1==e.currentFlag&&t.animationAfter()}),!1),t.setAfter()}},{key:"open",value:function(){this.targetChild.style.height=this.clientH+"px"}},{key:"close",value:function(){this.targetChild.style.height="0px",this.currentFlag=!1}},{key:"linkage",value:function(){var e=this;e.lastH=e.targetChild.style.height;for(var t=0;t<e.arrayLength;t++)0==e.array[t].currentFlag&&e.array[t].close()}}]),e}();a={},(n=r).target=document.querySelectorAll(t.target),[].slice.call(n.target).forEach((function(e,t){a[t]=new o(e),a[t].set()}))}},function(e,t,r){var c=this;function a(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(e){var t,i,n={className:".js-inview",UA:(new(r(0))).dvType(),changeTiming:0,reverse:!0},o=Object.assign(n,e),s=document.querySelectorAll(o.className),p=function(e,t){[].slice.call(e.target).forEach((function(r,c){1==t&&(e.array[c]=new l(r)),e.array[c].set()}))},y=function(){t=void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop,i=t+window.innerHeight,t+=window.innerHeight*o.changeTiming,i-=window.innerHeight*o.changeTiming},h=function(e,t){e||(e=setTimeout((function(){e=0,t()}),100))},l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.tg=t}var r,c,n;return r=e,(c=[{key:"set",value:function(){y();var e=this;e.tgRect=e.tg.getBoundingClientRect(),e.tgTop=e.tgRect.top+t,e.tgBottom=e.tgTop+e.tg.clientHeight,t<e.tgTop&&e.tgBottom<i?e.tg.classList.add("is-inview"):1==o.reverse&&e.tg.classList.remove("is-inview")}},{key:"debug",value:function(){console.log("スクロールトップ:"+t),console.log("スクロールボトム:"+i),console.log("ターゲットトップ:"+this.tgTop),console.log("ターゲットボトム:"+this.tgBottom)}}])&&a(r.prototype,c),n&&a(r,n),e}();!function(){if(null!=s){var e=c;e.target=s,e.array={},e.timeoutId=1,e.currentWidth=window.innerWidth,y(),p(e,!0),window.addEventListener("resize",(function(){h(e.timeoutId,(function(){if("pc"!=o.UA){if(e.currentWidth==window.innerWidth)return;e.currentWidth=window.innerWidth,p(e)}else p(e)}))})),window.addEventListener("scroll",(function(){h(e.timeoutId,(function(){p(e)}))})),e.timeoutId=setTimeout((function(){e.timeoutId=0}),100)}}()}},function(e,t){e.exports=function(e){var t,r;!function(){function e(e,t,r){var c=this;e.each((function(){c.$str=$(this).find(t).text(),c.$str=function(e,t,r){return this.reg=new RegExp(t,"g"),e.replace(this.reg,r)}(c.$str,r,""),$(this).find(t).text(c.$str)}))}!function(){this.$target=$(".l-markupBlock"),e(this.$target,".pug+.source code","                        "),e(this.$target,".js+.source code","                        ")}()}(),t=$(".c-memoSet01"),r=".group.is-before .tab li",t.on("click",r,(function(){$(this).parents(".c-memoSet01").find(r).removeClass("is-current"),$(this).parents(".c-memoSet01").find(".group.is-primary").removeClass("is-current"),$(this).addClass("is-current"),$(this).parents(".c-memoSet01").find(".group.is-primary").eq($(this).index()).addClass("is-current")}))}},function(e,t,r){var c=r(11);e.exports=function(e){var t=new c;t.set(".js-mainvisualSet01"),t.option({arrows:!0,appendArrows:$(".c-mainvisualSet01"),prevArrow:'<p class="slick-prev"></p>',nextArrow:'<p class="slick-next"></p>',customPaging:function(e,t){return"<span></span>"},dots:!0});var r=new c;r.set(".js-slickSlider"),r.option()}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultOp={arrows:!1,dots:!1}}var t,c,a;return t=e,(c=[{key:"set",value:function(e){this.tg=e,$(this.tg).slick()}},{key:"option",value:function(e){this.defaultOp=Object.assign(this.defaultOp,e),$(this.tg).slick("slickSetOption",this.defaultOp,!0)}}])&&r(t.prototype,c),a&&r(t,a),e}()},function(module,exports,__webpack_require__){function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var initFunc=__webpack_require__(1),canvasLoading=__webpack_require__(13),alphabetMaskFunc=function alphabetMaskFunc(){var init=function(){new logoSetAll({tg:document.querySelector("#js-alphabetMask")}).set()},logoSetAll=function(){function e(t){_classCallCheck(this,e);var r=this;r.target=t.tg,r.C_WIDTH=2732,r.C_HEIGHT=1372,r.queue=new createjs.LoadQueue(!1),r.imageArray=[{src:"/assets/images/top_mainvisual_bg01.jpg"}],r.imagePath={},r.circleFlag=!0}return _createClass(e,[{key:"set",value:function(){var e=this,t=function(){e.stage=new createjs.Stage(e.target),e.stage.enableMouseOver(),e.alphabetContainer=new createjs.Container,e.stage.addChild(e.alphabetContainer),e.circleContainer=new createjs.Container,e.stage.addChild(e.circleContainer),e.bgTarget01=new createjs.Bitmap(e.imageArray[0].src),e.bgTarget02=new createjs.Bitmap(e.imageArray[0].src),e.alphabetContainer.addChild(e.bgTarget01),e.circleContainer.addChild(e.bgTarget02),c(e.bgTarget01,e.img),c(e.bgTarget02,e.img),e.alphabetMaskWrap=new createjs.Shape,e.alphabetMaskWrap.cache(0,0,e.C_WIDTH,e.C_HEIGHT),e.circleMaskWrap=new createjs.Shape,e.circleMaskWrap.cache(0,0,e.C_WIDTH,e.C_HEIGHT),e.alphabetContainer.set({mask:e.alphabetMaskWrap,alpha:0}),e.circleContainer.set({mask:e.circleMaskWrap}),e.alphabetContainer.on("mouseover",(function(t){1==e.circleFlag&&(n(),e.circleFlag=!1)})),e.target.addEventListener("mousemove",(function(t){e.mouseX=t.clientX,e.mouseY=t.clientY}),!1)},r=function(){e.stage.update()},c=function(t,r){t.x=e.C_WIDTH/2,t.y=e.C_HEIGHT/2,r.height*e.C_WIDTH/r.width<e.C_HEIGHT?(t.scaleY=e.C_HEIGHT/r.height,t.scaleX=t.scaleY):(t.scaleX=e.C_WIDTH/r.width,t.scaleY=t.scaleX),t.regX=r.width/2,t.regY=r.height/2},a=function(){e.alphabet={},e.alphabet[0]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"208,262"},{type:"bt",s:"188,282,163,294,130,294"},{type:"bt",s:"97,294,72,282,52,262"},{type:"bt",s:"22,233,23,197,23,147"},{type:"lt",s:"23,126"},{type:"lt",s:"0,126"},{type:"bt",s:"0,87,3,57,28,32"},{type:"bt",s:"49,11,74,0,107,0"},{type:"bt",s:"140,0,164,11,185,32"},{type:"bt",s:"210,57,213,87,213,126"},{type:"lt",s:"237,126"},{type:"lt",s:"237,147"},{type:"bt",s:"237,197,237,233,208,262"},{type:"mt",s:"180,147"},{type:"lt",s:"180,126"},{type:"lt",s:"157,126"},{type:"bt",s:"156,88,152,76,143,66"},{type:"bt",s:"135,56,122,50,107,50"},{type:"bt",s:"92,50,78,56,70,66"},{type:"bt",s:"61,76,57,88,57,126"},{type:"lt",s:"80,126"},{type:"lt",s:"80,147"},{type:"bt",s:"80,202,82,216,93,228"},{type:"bt",s:"102,237,115,243,130,243"},{type:"bt",s:"145,243,158,237,166,228"},{type:"bt",s:"177,216,180,202,180,147"}],posx:0*e.C_WIDTH,posy:.05*e.C_HEIGHT}),e.alphabet[0].set(),e.alphabet[1]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"89,38"},{type:"lt",s:"145,38"},{type:"lt",s:"145,0"},{type:"lt",s:"0,0"},{type:"lt",s:"0,215"},{type:"lt",s:"65,215"},{type:"lt",s:"70,190"},{type:"lt",s:"145,190"},{type:"lt",s:"145,153"},{type:"lt",s:"79,153"},{type:"lt",s:"73,177"},{type:"lt",s:"42,177"},{type:"lt",s:"42,130"},{type:"lt",s:"85,130"},{type:"lt",s:"90,106"},{type:"lt",s:"145,106"},{type:"lt",s:"145,68"},{type:"lt",s:"99,68"},{type:"lt",s:"93,93"},{type:"lt",s:"42,93"},{type:"lt",s:"42,38"},{type:"lt",s:"89,38"}],posx:.32*e.C_WIDTH,posy:.02*-e.C_HEIGHT}),e.alphabet[1].set(),e.alphabet[2]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"165,190"},{type:"lt",s:"98,190"},{type:"lt",s:"177,314"},{type:"lt",s:"243,314"},{type:"lt",s:"165,190"},{type:"mt",s:"210,0"},{type:"lt",s:"138,1"},{type:"lt",s:"62,135"},{type:"lt",s:"62,0"},{type:"lt",s:"0,0"},{type:"lt",s:"0,314"},{type:"lt",s:"62,314"},{type:"lt",s:"62,190"},{type:"lt",s:"98,190"},{type:"lt",s:"210,0"}],posx:.55*e.C_WIDTH,posy:.05*-e.C_HEIGHT}),e.alphabet[2].set(),e.alphabet[3]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"231.47, 148.81"},{type:"bt",s:"205.84, 123.35, 159.47, 121.42, 125.06, 116.05000000000001"},{type:"lt",s:"125.06, 143.37"},{type:"bt",s:"76.12, 138.45, 68.14, 96, 94.86, 71.67"},{type:"bt",s:"125.1, 48.14, 185.51, 61.36, 206.35, 83.85"},{type:"lt",s:"249.73, 41"},{type:"bt",s:"217, 8.62, 173.24, -3.25, 119.91, 0.74"},{type:"bt",s:"-27.66, 14, -19.93, 207.07, 125.1, 207.28"},{type:"lt",s:"125.1, 180"},{type:"bt",s:"223.56, 181.27, 206.86, 276, 125.1, 268.65999999999997"},{type:"lt",s:"125.1, 296"},{type:"bt",s:"94.17999999999999, 295.36, 65.69, 287.75, 44.459999999999994, 266.51"},{type:"lt",s:"0, 310.89"},{type:"bt",s:"33.83, 345.21, 73.38, 356.77, 125.06, 357.24"},{type:"lt",s:"125.06, 330"},{type:"bt",s:"280.78, 330.43, 276.88, 190.43, 231.47, 148.8"}],posx:1*e.C_WIDTH-480,posy:.16*e.C_HEIGHT}),e.alphabet[3].set(),e.alphabet[4]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"178,23"},{type:"lt",s:"178,0"},{type:"lt",s:"0,0"},{type:"lt",s:"0,50"},{type:"lt",s:"78,50"},{type:"lt",s:"25,287"},{type:"lt",s:"81,287"},{type:"lt",s:"134,50"},{type:"lt",s:"178,50"},{type:"lt",s:"178,73"},{type:"lt",s:"236,73"},{type:"lt",s:"236,23"},{type:"lt",s:"178,23"}],posx:.65*e.C_WIDTH,posy:.7*e.C_HEIGHT}),e.alphabet[4].set(),e.alphabet[5]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"151.35,68.53"},{type:"bt",s:"137.13,54.31,120.42999999999999,45.53,98.97999999999999,43.25"},{type:"lt",s:"98.74999999999999,85.32"},{type:"bt",s:"105.09999999999998,85.58999999999999,119.97999999999999,95.58999999999999,124.64999999999998,109.13999999999999"},{type:"bt",s:"127.96999999999997,118.76999999999998,128.73,132.57999999999998,128.73,163"},{type:"bt",s:"128.73,163.76,128.73,236.82,128.73,237.56"},{type:"lt",s:"175,237.56"},{type:"bt",s:"173.21,154.23,183.74,99,151.35,68.53"},{type:"mt",s:"23.28,26.22"},{type:"bt",s:"-0.66,50.17,0,79.77,0,120.69"},{type:"lt",s:"0,237.56"},{type:"lt",s:"46.24,237.56"},{type:"lt",s:"46.24,186.21"},{type:"lt",s:"98.68,186.21"},{type:"lt",s:"98.68,145"},{type:"bt",s:"98.68,145,50.35000000000001,145,46.480000000000004,145"},{type:"bt",s:"45.85,124.13,45.38,78.68,50.74,65.43"},{type:"bt",s:"54.28,52.7,74.14,36.53,99,43.25"},{type:"bt",s:"99,43.25,98.79,6.009999999999998,98.77,1.3699999999999974"},{type:"bt",s:"76.26,-4.09,40,7.27,23.28,26.22"}],posx:.43*e.C_WIDTH,posy:.67*e.C_HEIGHT}),e.alphabet[5].set(),e.alphabet[6]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"111,0"},{type:"lt",s:"91,90"},{type:"lt",s:"49,90"},{type:"lt",s:"70,0"},{type:"lt",s:"29,0"},{type:"lt",s:"0,127"},{type:"lt",s:"83,127"},{type:"lt",s:"73,173"},{type:"lt",s:"114,173"},{type:"lt",s:"152,0"},{type:"lt",s:"111,0"},{type:"mt",s:"23,209"},{type:"lt",s:"64,209"},{type:"lt",s:"73,173"},{type:"lt",s:"31,173"},{type:"lt",s:"23,209"}],posx:.22*e.C_WIDTH,posy:.64*e.C_HEIGHT}),e.alphabet[6].set(),e.alphabet[7]=new logoSet({mask:e.alphabetMaskWrap,point:[{type:"mt",s:"74,0"},{type:"lt",s:"64,43"},{type:"lt",s:"45,43"},{type:"lt",s:"0,245"},{type:"lt",s:"48,245"},{type:"lt",s:"93,43"},{type:"lt",s:"112,43"},{type:"lt",s:"122,0"},{type:"lt",s:"74,0"}],posx:.08*e.C_WIDTH,posy:.7*e.C_HEIGHT}),e.alphabet[7].set(),e.hoverCircle=e.circleMaskWrap.graphics.f("#FFF").dc(0,0,1).command},i=function(){createjs.Ticker.addEventListener("tick",r,!1),createjs.Tween.get(e.alphabetContainer).to({alpha:0},0).to({alpha:1},2e3)},n=function(){createjs.Ticker.addEventListener("tick",r,!1),e.hoverCircle=e.circleMaskWrap.graphics.f("#FFF").dc(e.mouseX*(1366/window.innerWidth)*2,e.mouseY*(1366/window.innerWidth)*2,2).command,createjs.Tween.get(e.hoverCircle).to({radius:0},0).to({radius:8e3},2200,createjs.Ease.cubicInOut).call((function(){createjs.Ticker.removeEventListener("tick",r)}))};e.img=new Image,e.img.src=e.imageArray[0].src,e.img.onload=function(){e.img.width=e.img.naturalWidth,e.img.height=e.img.naturalHeight},e.queue.loadManifest(e.imageArray),e.queue.setMaxConnections(3),e.queue.addEventListener("complete",(function(c){t(),a(),e.scaleInit(),i(),r()}))}},{key:"scaleInit",value:function(){var e=this;e.stage.canvas.width=e.C_WIDTH,e.stage.canvas.height=e.C_HEIGHT}}]),e}(),logoSet=function(){function logoSet(e){_classCallCheck(this,logoSet);var t=this;t.sx=e.posx/2,t.sy=e.posy/2,t.ss=2,t.s={},t.p={},t.t={},t.mask=e.mask,t.point=e.point}return _createClass(logoSet,[{key:"set",value:function(){var e=this;[].slice.call(e.point).forEach((function(t,r){e.s[r]=e.pointSet(t,r)})),e.s[e.point.length+1]=e.mask.graphics.closePath().command}},{key:"pointSet",value:function pointSet(e,i){var _t=this,pointCjs;return _t.p=e.s.split(","),_t.t[i]={},[].slice.call(_t.p).forEach((function(e,t){_t.p[t]=t%2!=0?"("+e+"+_t.sy)*_t.ss,":"("+e+"+_t.sx)*_t.ss,"})),pointCjs=_t.p.join(""),eval("_t.mask.graphics."+_t.point[i].type+"("+pointCjs+")").command}},{key:"tween",value:function(){createjs.Tween.get(this.hoverCircle).to({y:0,y1:0,y2:0},0).to({y:0,y1:0,y2:0},0)}}]),logoSet}();init()},initSet=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){alphabetMaskFunc()}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}]),e}();module.exports=function(e){var t=new initSet;initFunc(t,e,"is-canvas")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;r.target=t.tg,r.contentsName=[{name:"type01",src:"../images/logo01.png"},{name:"type02",src:"../images/logo02.png"},{name:"type03",src:"../images/logo03.png"},{name:"type04",src:"../images/logo04.png"},{name:"type05",src:"../images/logo05.png"}],r.containerArray={},r.graphicArray={},r.pointArray={},r.bgArray={},r.imageArray={},r.queue=new createjs.LoadQueue(!1)}var t,c,a;return t=e,(c=[{key:"set",value:function(){var e=this;e.imagePath={};var t=function(){function t(){e.stage.canvas.width=window.innerWidth,e.stage.canvas.height=window.innerHeight}t(),window.addEventListener("resize",t)};e.stage=new createjs.Stage(e.target),createjs.Ticker.addEventListener("tick",(function(){e.stage.update()}),!1),createjs.Ticker.setFPS(60),createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED,e.queue.loadManifest(e.contentsName),e.queue.setMaxConnections(3),e.queue.addEventListener("complete",(function(r){$.each(e.contentsName,(function(t,r){e.imagePath[t]=new Image,e.imagePath[t].src=r.src,r.width=e.imagePath[t].naturalWidth,r.height=e.imagePath[t].naturalHeight})),t(),e.drawInit()}))}},{key:"drawInit",value:function(){var e=this;function t(){e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,$.each(e.contentsName,(function(t,r){switch(e.graphicArray[t]=new createjs.Shape,e.imageArray[t]=new createjs.Bitmap(r.src),e.containerArray[t]=new createjs.Container,e.bgArray[t]=new createjs.Shape,e.stage.removeChild(e.containerArray[t]),e.containerArray[t].removeChild(e.bgArray[t]),e.containerArray[t].removeChild(e.imageArray[t]),e.stage.addChild(e.containerArray[t]),e.containerArray[t].addChild(e.bgArray[t]),e.containerArray[t].addChild(e.imageArray[t]),r.name){case"type01":e.bgArray[t].graphics.beginFill("#355cfc").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],chm=e.ch/9,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(.6*e.cw,0).command,e.pointArray[t][2]=e.graphicArray[t].graphics.bezierCurveTo(.7*e.cw,1*chm,.65*e.cw,2*chm,.75*e.cw,3*chm).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(.85*e.cw,4*chm,.7*e.cw,5*chm,.85*e.cw,6*chm).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(1.05*e.cw,7*chm,e.cw,8*chm,e.cw,9*chm).command,e.pointArray[t][5]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][7]=e.graphicArray[t].graphics.moveTo(.5*e.cw+10,e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(0,8*chm,0,7*chm,0,6*chm).command,e.pointArray[t][10]=e.graphicArray[t].graphics.bezierCurveTo(0,5*chm,0,4*chm,0,3*chm).command,e.pointArray[t][11]=e.graphicArray[t].graphics.bezierCurveTo(0,2*chm,0,1*chm,0,0).command,e.pointArray[t][12]=e.graphicArray[t].graphics.lineTo(.5*e.cw+10,0).command,e.graphicArray[t].set({x:2*-e.cw,y:0,scaleX:1,scaleY:1});break;case"type02":e.bgArray[t].graphics.beginFill("#ff5b7f").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/6,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(0,.3*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,.1*e.ch,2*cwm,.22*e.ch,3*cwm,.2*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,.2*e.ch,5*cwm,0,6*cwm,.07*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.lineTo(e.cw,e.ch/2).command,e.pointArray[t][5]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][6]=e.graphicArray[t].graphics.moveTo(e.cw,e.ch/2).command,e.pointArray[t][7]=e.graphicArray[t].graphics.lineTo(e.cw,e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,e.ch,4*cwm,e.ch,3*cwm,e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,e.ch,1*cwm,e.ch,0,e.ch).command,e.pointArray[t][10]=e.graphicArray[t].graphics.lineTo(0,e.ch/2).command,e.graphicArray[t].set({x:0,y:e.ch,scaleX:1,scaleY:1});break;case"type03":e.bgArray[t].graphics.beginFill("#22ad77").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/12,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(e.cw,.6*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(11*cwm,.52*e.ch,10*cwm,.75*e.ch,9*cwm,.55*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(8*cwm,.4*e.ch,7*cwm,.65*e.ch,6*cwm,.55*e.ch).command,e.pointArray[t][5]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,.45*e.ch,4*cwm,.8*e.ch,3*cwm,.65*e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,.4*e.ch,1*cwm,.8*e.ch,0,.55*e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,.6*e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][10]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.lineTo(0,0).command,e.pointArray[t][12]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,0,2*cwm,0,3*cwm,0).command,e.pointArray[t][13]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,0,5*cwm,0,6*cwm,0).command,e.pointArray[t][14]=e.graphicArray[t].graphics.bezierCurveTo(7*cwm,0,8*cwm,0,9*cwm,0).command,e.pointArray[t][15]=e.graphicArray[t].graphics.bezierCurveTo(10*cwm,0,11*cwm,0,12*cwm,0).command,e.pointArray[t][17]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.graphicArray[t].set({x:0,y:-e.ch,scaleX:1,scaleY:1});break;case"type04":e.bgArray[t].graphics.beginFill("#ffb000").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/9,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(e.cw,.55*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(8*cwm,.75*e.ch,7*cwm,.52*e.ch,6*cwm,.65*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,.8*e.ch,4*cwm,.65*e.ch,3*cwm,.85*e.ch).command,e.pointArray[t][5]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,1*e.ch,1*cwm,.96*e.ch,0,.95*e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][7]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,0*e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,0*e.ch,2*cwm,0*e.ch,3*cwm,0*e.ch).command,e.pointArray[t][10]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,0*e.ch,5*cwm,0*e.ch,6*cwm,0*e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.bezierCurveTo(7*cwm,0*e.ch,8*cwm,0*e.ch,9*cwm,0*e.ch).command,e.pointArray[t][12]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][13]=e.graphicArray[t].graphics.closePath().command,e.graphicArray[t].set({x:0,y:-e.ch,scaleX:1,scaleY:1});break;case"type05":e.bgArray[t].graphics.beginFill("#e65024").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],chm=e.ch/6,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(.15*e.cw,e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(.15*e.cw,4*chm,.35*e.cw,5*chm,.25*e.cw,3*chm).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(.18*e.cw,1*chm,.45*e.cw,2*chm,.4*e.cw,0).command,e.pointArray[t][5]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][6]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][7]=e.graphicArray[t].graphics.lineTo(e.cw,0).command,e.pointArray[t][8]=e.graphicArray[t].graphics.bezierCurveTo(e.cw,1*chm,e.cw,2*chm,e.cw,3*chm).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(e.cw,4*chm,e.cw,5*chm,e.cw,6*chm).command,e.pointArray[t][10]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.closePath().command,e.graphicArray[t].set({x:e.cw,y:0,scaleX:1,scaleY:1})}e.containerArray[t].set({mask:e.graphicArray[t]}),e.imageArray[t].x=e.stage.canvas.width/2,e.imageArray[t].y=e.stage.canvas.height/2,e.imageArray[t].regX=r.width/2,e.imageArray[t].regY=r.height/2}))}t(),window.addEventListener("resize",t)}},{key:"type01_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[0],{override:!0}).to({x:-e.cw},0).to({x:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][1],{override:!0}).to({x:.6*e.cw},0).to({x:e.cw},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][2],{override:!0}).to({cp1x:.7*e.cw,cp2x:.65*e.cw,x:.75*e.cw},0).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][3],{override:!0}).to({cp1x:.85*e.cw,cp2x:.7*e.cw,x:.85*e.cw},0).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},1100,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][4],{override:!0}).to({cp1x:1.05*e.cw},0).to({cp1x:e.cw},600,createjs.Ease.cubicOut)}},{key:"type01_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[0],{override:!0}).to({x:0},0).to({x:e.cw},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][8],{override:!0}).to({x:0},0).wait(100).to({x:.4*e.cw},1e3,createjs.Ease.cubicOut).to({x:0},0),createjs.Tween.get(e.pointArray[0][9],{override:!0}).to({cp1x:0,cp2x:0,x:0},0).wait(100).to({cp1x:.3*e.cw,cp2x:.35*e.cw,x:.25*e.cw},1200,createjs.Ease.cubicOut).to({cp1x:0,cp2x:0,x:0},0),createjs.Tween.get(e.pointArray[0][10],{override:!0}).to({cp1x:0,cp2x:0,x:0},0).wait(100).to({cp1x:.15*e.cw,cp2x:.3*e.cw,x:.15*e.cw},1300,createjs.Ease.cubicOut).to({cp1x:0,cp2x:0,x:0},0),createjs.Tween.get(e.pointArray[0][11],{override:!0}).to({cp1x:0},0).wait(100).to({cp1x:.05*e.cw},2e3,createjs.Ease.cubicOut).to({cp1x:0},0)}},{key:"type02_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[1],{override:!0}).to({y:e.ch},0).to({y:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][1],{override:!0}).to({y:.3*e.ch},0).to({y:0},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][2],{override:!0}).to({cp1y:.1*e.ch,cp2y:.22*e.ch,y:.2*e.ch},0).to({cp1y:0,cp2y:0,y:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][3],{override:!0}).to({cp1y:.2*e.ch,cp2y:0,y:.07*e.ch},0).to({cp1y:0,cp2y:0,y:0},1200,createjs.Ease.cubicOut)}},{key:"type02_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[1],{override:!0}).to({y:0},0).to({y:-e.ch},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][7],{override:!0}).to({y:e.ch},0).to({y:.7*e.ch},1200,createjs.Ease.cubicOut).to({y:e.ch},0),createjs.Tween.get(e.pointArray[1][8],{override:!0}).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0).to({cp1y:.9*e.ch,cp2y:.78*e.ch,y:.8*e.ch},1200,createjs.Ease.cubicOut).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0),createjs.Tween.get(e.pointArray[1][9],{override:!0}).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0).to({cp1y:.8*e.ch,cp2y:e.ch,y:.93*e.ch},1200,createjs.Ease.cubicOut).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0)}},{key:"type03_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[2],{override:!0}).to({y:-e.ch},0).to({y:0},1500),createjs.Tween.get(e.pointArray[2][2],{override:!0}).to({y:.4*e.ch},0).wait(600).to({y:.6*e.ch},600).to({y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][3],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.52*e.ch,cp2y:.75*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][4],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.4*e.ch,cp2y:.65*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][5],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.45*e.ch,cp2y:.8*e.ch,y:.65*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][6],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.4*e.ch,cp2y:.8*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut)}},{key:"type03_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[2],{override:!0}).to({y:0},0).to({y:e.ch},1e3),createjs.Tween.get(e.pointArray[2][11],{override:!0}).to({y:0},0).to({y:.4*e.ch},600).wait(500).to({y:0},0),createjs.Tween.get(e.pointArray[2][12],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.48*e.ch,cp2y:.25*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][13],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.6*e.ch,cp2y:.35*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][14],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.55*e.ch,cp2y:.2*e.ch,y:.35*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][15],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.6*e.ch,cp2y:.2*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0)}},{key:"type04_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[3],{override:!0}).to({y:-e.ch},0).to({x:0,y:0},1e3,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][2],{override:!0}).to({y:.55*e.ch},0).wait(300).to({y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][3],{override:!0}).to({y:.65*e.ch,cp1y:.75*e.ch,cp2y:.52*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][4],{override:!0}).to({y:.85*e.ch,cp1y:.8*e.ch,cp2y:.65*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][5],{override:!0}).to({y:1*e.ch,cp1y:.96*e.ch,cp2y:.95*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut)}},{key:"type04_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[3],{override:!0}).to({y:0},0).to({y:e.ch},1e3,createjs.Ease.cubicIn),createjs.Tween.get(e.pointArray[3][8],{override:!0}).to({y:0},0).to({y:.45*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0},0),createjs.Tween.get(e.pointArray[3][9],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.25*e.ch,cp2y:.48*e.ch,y:.35*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[3][10],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.2*e.ch,cp2y:.35*e.ch,y:.15*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[3][11],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:0*e.ch,cp2y:.04*e.ch,y:.05*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0)}},{key:"type05_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[4],{override:!0}).to({x:e.cw},0).to({x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][2],{override:!0}).to({x:.15*e.cw},0).to({x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][3],{override:!0}).to({cp1x:.15*e.cw,cp2x:.35*e.cw,x:.25*e.cw},0).to({cp1x:0,cp2x:0,x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][4],{override:!0}).to({cp1x:.18*e.cw,cp2x:.45*e.cw,x:.4*e.cw},0).to({cp1x:0,cp2x:0,x:0},1500,createjs.Ease.cubicInOut)}},{key:"type05_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[4],{override:!0}).to({x:0},0).to({x:-e.cw},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][7],{override:!0}).to({x:e.cw},0).to({x:.85*e.cw},1500,createjs.Ease.cubicInOut).to({x:e.cw},0),createjs.Tween.get(e.pointArray[4][8],{override:!0}).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0).to({cp1x:.85*e.cw,cp2x:.65*e.cw,x:.75*e.cw},1500,createjs.Ease.cubicInOut).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0),createjs.Tween.get(e.pointArray[4][9],{override:!0}).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0).to({cp1x:.85*e.cw,cp2x:.55*e.cw,x:.6*e.cw},1500,createjs.Ease.cubicInOut).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0)}}])&&r(t.prototype,c),a&&r(t,a),e}()}]);