'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
	async index() {
		const { ctx } = this;
		const data = {
			// list,
		};
		await ctx.render('blog/list.tpl', data);
	}
	async show() {
		const { ctx } = this;
		const id = +ctx.params.id;
		const data = ctx.service.blog.findById(id);
		await ctx.render('blog/detail.tpl', data);
	}
}

module.exports = BlogController;
