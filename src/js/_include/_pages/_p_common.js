const initFunc = require('../_modules/initFunc.js');

// init
class initSet {
	DOMReadBefore(op) {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service_worker.js').then(function(registration) {
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}).catch(function(err) {
				console.log('ServiceWorker registration failed: ', err);
			});
		};
	}
	DOMReadAfter(op) {
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
	initFunc(init, option);
}