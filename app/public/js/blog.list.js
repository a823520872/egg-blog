'use strict';
function $(cls, contain) {
	const wrap = contain || document;
	return wrap.querySelectorAll(cls);
}

class DelEvent {
	show(e) {
		events.fire('showModal', e.target.dataset.id);
	}
	action(id) {
		console.log(id);
		// fetch(`/blog/${id}/del`, {
		// 	method: 'DELETE',
		// })
		// 	.then(res => {
		// 		if (res.ok) {
		// 			return res.json();
		// 		}
		// 		throw new Error('网络错误');
		// 	})
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err.message));
	}
}

class Modal {
	constructor() {
		const tpl = `<div class="modal-backdrop fade show" style="display: block;"></div>
				<div class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">提示</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p>确认删除该博客吗？</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
								<button type="button" class="btn btn-primary">确定</button>
							</div>
						</div>
					</div>
				</div>`;
		const div = document.createElement('div');
		const wrap = $('.container')[0];
		div.innerHTML = tpl;
		this.contain = div;
		this.id = '';
		this.init();
		wrap.appendChild(div);
	}
	init() {
		const self = this;
		const btnClose = $('.close', this.contain)[0];
		const btnCancel = $('.btn-secondary', this.contain)[0];
		const btnConfirm = $('.btn-primary', this.contain)[0];
		this.hide();
		btnClose.addEventListener('click', function() {
			self.hide();
		});
		btnCancel.addEventListener('click', function() {
			console.log(self.id);
			self.hide();
		});
		btnConfirm.addEventListener('click', function() {
			self.hide();
		});
	}
	show(id) {
		this.id = id;
		this.contain.style.display = 'block';
	}
	hide() {
		this.id = '';
		this.contain.style.display = 'none';
	}
}

function onReady() {
	const delBtns = $('.j-del');
	const modal = new Modal();
	const delEvent = new DelEvent();
	events.on('showModal', function(id) {
		modal.show(id);
	});
	events.on('delAction', function(id) {
		delEvent.action(id);
	});
	for (let index = delBtns.length - 1; index >= 0; index--) {
		const element = delBtns[index];
		element.addEventListener('click', delEvent.show);
	}
}

window.addEventListener('DOMContentLoaded', onReady);
