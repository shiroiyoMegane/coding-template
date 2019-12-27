'use strict'
const comSet = require('../../_include/_pages/_p_common/_p_common.js');
const uaSet = require('../../_include/_modules/_m_javascript/_m_ua/_m_ua.js');

let globalOption = {
	W_WIDTH: window.innerWidth,
	SP_WIDTH: 768,
	PC_WIDTH: 1200,
	UA: new uaSet().dvType(),
	PAGE_FLAG: "html",
}

function init() {
	comSet(globalOption);
}
init();