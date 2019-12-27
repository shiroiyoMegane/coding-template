

// 追加module
const initFunc = require('../../_modules/_m_javascript/_m_initFunc/_m_initFunc.js');
const matchHeight = require('../../_modules/_m_javascript/_m_matchHeight/_m_matchHeight.js');
// const smoothScroll = require('../../_modules/_m_javascript/_m_smoothScroll/_m_smoothScroll.js');
const spTellLink = require('../../_modules/_m_javascript/_m_spTellLink/_m_spTellLink.js');
const accordionSet = require('../../_modules/_m_javascript/_m_accordionSet/_m_accordionSet.js');
const inView = require('../../_modules/_m_javascript/_m_inView/_m_inView.js');
const markupBlock = require('../../_modules/_m_javascript/_m_markupBlock/_m_markupBlock.js');
const mainvisualSet01 = require('../../_modules/_m_javascript/_m_mainvisualSet01/_m_mainvisualSet01.js');


// init
class initSet {
	DOMReadBefore(op) {
		// DOM読み込み前
	}
	DOMReadAfter(op) {
		// DOM読み込み後
		// smoothScroll();
		matchHeight();
		spTellLink();
		accordionSet();
		inView();
		markupBlock();
		mainvisualSet01();
		hljs.initHighlightingOnLoad();
	}
	imageReadAfter(op) {
		// 画像読み込み後
	}
	windowResize(op) {
		// リサイズ
	}
	windowScroll(op) {
		// スクロール
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option, 'is-component');
}