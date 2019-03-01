'use strict';
const events = {};
(function(q) {
	const topics = {};
	q.fire = function(topic, ...args) {
		if (!topics[topic]) {
			return false;
		}
		setTimeout(function() {
			const ons = topics[topic];
			let len = ons ? ons.length : 0;

			while (len--) {
				ons[len](...args);
			}
		}, 0);
	};
	q.on = function(topic, func) {
		if (!topics[topic]) {
			topics[topic] = [];
		}
		topics[topic].push(func);
	};
	q.off = function(topic) {
		topics[topic] = [];
	};
})(events);
