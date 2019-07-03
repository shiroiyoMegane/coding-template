'use strict'
require("@babel/polyfill");
const comSet = require('./_include/_pages/_p_common.js');
const homeSet = require('./_include/_pages/_p_home.js');
const componentSet = require('./_include/_pages/_p_component.js');
const uaSet = require('./_include/_modules/ua.js');

let option = {
	SP_WIDTH: 768,
	PC_WIDTH: 1200,
	UA: new uaSet().dvType(),
	PAGE_FLAG: "html",
}
const init = () => {
	comSet(option);
	homeSet(option);
	componentSet(option);
}
init();