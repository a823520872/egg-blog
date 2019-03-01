'use strict';

const Controller = require('egg').Controller;
const categoryRule = {
	name: {
		type: 'string',
	},
};

class CategoryController extends Controller {
	async index() {
		const { ctx, service } = this;
		const list = await service.category.findByQuery();
		await ctx.render('category/list.tpl', { title: '分类列表', list });
	}
	async new() {
		await this.ctx.render('category/add.tpl', { title: '添加分类' });
	}
	async create() {
		const { ctx, service } = this;
		const category = ctx.request.body;
		ctx.validate(categoryRule, category);
		const success = await service.category.newAndSave(category);
		if (success) {
			const list = await service.category.findByQuery();
			await ctx.redirect('/category', { title: '添加分类', msg: '添加成功', list });
		} else {
			await ctx.redirect('category/add.tpl', {
				title: '添加分类',
				msg: '添加失败',
				error: true,
				category,
			});
		}
	}
	async show() {
		const { ctx, service } = this;
		const category = await service.category.findById(+ctx.params.id);
		if (!category) {
			ctx.status = 404;
			ctx.message = '此分类不存在或已被删除。';
			return;
		}
		await ctx.render('category/detail.tpl', { title: '分类详情', category });
	}
	async edit() {
		const { ctx, service } = this;
		const category = await service.category.findById(+ctx.params.id);
		if (!category) {
			ctx.status = 404;
			ctx.message = '此分类不存在或已被删除。';
			return;
		}
		await ctx.render('category/edit.tpl', { title: '编辑分类', category });
	}
	async update() {
		const { ctx, service } = this;
		const category_id = +ctx.params.id;
		let category = await service.category.findById(category_id);
		if (!category) {
			ctx.status = 404;
			ctx.message = '此分类不存在或已被删除。';
			return;
		}
		category = ctx.request.body;
		category.id = category_id;
		ctx.validate(categoryRule, category);
		const success = await service.category.update(category);
		if (success) {
			const list = await service.category.findByQuery();
			await ctx.redirect('/category', { title: '分类列表', msg: '编辑成功', list });
		} else {
			await ctx.redirect('category/edit.tpl', {
				title: '编辑分类',
				msg: '编辑失败',
				error: true,
				category,
			});
		}
	}
}

module.exports = CategoryController;
