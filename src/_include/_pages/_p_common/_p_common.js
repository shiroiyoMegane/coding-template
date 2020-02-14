import globalSet from '../../_modules/_m_javascript/_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;

// top serviceWorker
import serviceWorkerSet from '../../_modules/_m_javascript/_m_serviceWorkerSet/_m_serviceWorkerSet.js';
// inview set
import inView from '../../_modules/_m_javascript/_m_inView/_m_inView.js';
// Inertial scroll
import luxySet from '../../_modules/_m_javascript/_m_luxySet/_m_luxySet.js';
// accordion
import accordionSet from '../../_modules/_m_javascript/_m_accordionSet/_m_accordionSet.js';
// sp tell link
import spTellLink from '../../_modules/_m_javascript/_m_spTellLink/_m_spTellLink.js';
//matchHeight
import matchHeight from '../../_modules/_m_javascript/_m_matchHeight/_m_matchHeight.js';


// ----- component用 ------
import markupBlock from '../../_modules/_m_javascript/_m_markupBlock/_m_markupBlock.js';
import mainvisualSet01 from '../../_modules/_m_javascript/_m_mainvisualSet01/_m_mainvisualSet01.js';

function init() {
	serviceWorkerSet();
	inView();
	luxySet();
	accordionSet();
	spTellLink();
	matchHeight();

	markupBlock();
	mainvisualSet01();
	
}

export default function() {
	init();
}