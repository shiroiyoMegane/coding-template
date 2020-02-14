'use strict'
import comSet from '../../_include/_pages/_p_common/_p_common.js'
// const componentSet = require('../../_include/_pages/_p_component/_p_component.js');
import canvasSet from '../../_include/_pages/_p_canvas/_p_canvas.js'
// const uaSet = require('../../_include/_modules/_m_javascript/_m_ua/_m_ua.js');

// let globalOption = {
// 	W_WIDTH: window.innerWidth,
// 	SP_WIDTH: 768,
// 	PC_WIDTH: 1200,
// 	UA: new uaSet().dvType(),
// 	PAGE_FLAG: "html",
// }

function init() {
	comSet();
	// componentSet(globalOption);
	canvasSet();
}
init();