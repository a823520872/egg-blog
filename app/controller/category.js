'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
	async index() {
		const { ctx } = this;
		const list = await ctx.service.category.findByQuery();
		await ctx.render('category/list.tpl', { title: '分类列表', list });
	}
}

module.exports = CategoryController;
