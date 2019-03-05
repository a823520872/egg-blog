'use strict';
function $(cls, contain) {
	const wrap = contain || document;
	return wrap.querySelectorAll(cls);
}

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

class Modal {
	constructor(cfg) {
		cfg.title = cfg.title || '提示';
		const tpl = `<div class="modal-backdrop fade show" style="display: block;"></div>
				<div class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">${cfg.title}</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p>${cfg.content}</p>
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
		div.id = 'modal';
		div.innerHTML = tpl;
		this.contain = div;
		this.data = null;
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
			self.hide();
		});
		btnConfirm.addEventListener('click', function() {
			events.fire('confirmModal', self.data);
		});
	}
	show(data) {
		this.data = data;
		this.contain.style.display = 'block';
	}
	hide() {
		this.data = null;
		this.contain.style.display = 'none';
	}
}
