'use strict';

class DelEvent {
	show(e) {
		events.fire('showModal', e.target.dataset.id);
	}
	action(id) {
		console.log(id);
		fetch(`/blog/${id}/del`, {
			method: 'GET',
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				throw new Error('网络错误');
			})
			.then(res => {
				console.log(res);
				if (res.success) {
					events.fire('hideModal');
				}
			})
			.catch(err => console.log(err.message));
	}
}

function onReady() {
	const modal = new Modal({
		title: '提示',
		content: '确认删除该博客吗？',
	});
	// const delBtns = $('.j-del');
	const delEvent = new DelEvent();
	const list = $('.j-list')[0];
	events.on('showModal', function(id) {
		modal.show(id);
	});
	events.on('hideModal', function() {
		modal.hide();
	});
	events.on('confirmModal', function(id) {
		delEvent.action(id);
	});
	// for (let index = delBtns.length - 1; index >= 0; index--) {
	// 	const element = delBtns[index];
	// 	element.addEventListener('click', delEvent.show);
	// }
	list.addEventListener(
		'click',
		function(e) {
			const event = e || window.event;
			const target = event.target || event.srcElement;
			console.log(target);
			if (target.classList.contains('j-del')) {
				delEvent.show(event);
			}
		},
		false
	);
}

window.addEventListener('DOMContentLoaded', onReady, true);
