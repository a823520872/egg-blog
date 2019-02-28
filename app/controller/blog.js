'use strict';

const Controller = require('egg').Controller;
const blogRule = {
	title: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	content: {
		type: 'string',
	},
};

class BlogController extends Controller {
	async index() {
		const { ctx, service } = this;
		const list = await service.blog.findByQuery();
		await ctx.render('blog/list.tpl', { title: '博客列表', list });
	}
	async new() {
		const { ctx, service } = this;
		const list = await service.category.findByQuery();
		await ctx.render('blog/add.tpl', { title: '添加博客', categorys: list });
	}
	async create() {
		const { ctx, service } = this;
		const blog = ctx.request.body;
		const params = { ...blog, t_create: new Date() };
		ctx.validate(blogRule, blog);
		const success = await service.blog.newAndSave(params);
		if (success) {
			await ctx.redirect('/blog', { title: '博客列表', msg: '添加成功' });
		} else {
			const list = await service.category.findByQuery();
			await ctx.redirect('blog/add.tpl', { title: '添加博客', msg: '添加失败', categorys: list, blog });
		}
	}
	async show() {
		const { ctx, service } = this;
		const blog = await service.blog.findById(+ctx.params.id);
		if (!blog) {
			ctx.status = 404;
			ctx.message = '此博客不存在或已被删除。';
			return;
		}
		await ctx.render('blog/detail.tpl', { title: '博客详情', blog });
	}
	async edit() {
		const { ctx, service } = this;
		const blog = await service.blog.findById(+ctx.params.id);
		const list = await service.category.findByQuery();
		await ctx.render('blog/edit.tpl', { title: '编辑博客', blog, categorys: list });
	}
	async update() {
		const { ctx, service } = this;
		const blog_id = +ctx.params.id;
		const blog = await service.blog.findById(blog_id);
		if (!blog) {
			ctx.status = 404;
			ctx.message = '此博客不存在或已被删除。';
			return;
		}
		ctx.validate(blogRule, blog);
		blog.t_update = new Date();
	}
}

module.exports = BlogController;
