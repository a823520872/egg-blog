'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');
const userRule = {
	name: 'string',
	pass: {
		type: 'password',
		min: 6,
		max: 20,
	},
};

class UserController extends Controller {
	async signUp() {
		const { ctx } = this;
		await ctx.render('user/signUp.tpl', { title: '注册' });
	}
	async register() {
		const { ctx, service } = this;
		const params = ctx.request.body;
		ctx.validate(
			{
				name: 'string',
				pass: {
					type: 'password',
					compare: 'repass',
					min: 6,
					max: 20,
				},
			},
			params
		);
		const user = _.pick(params, [ 'name', 'pass' ]);
		const hasExist = await service.user.findByQuery({ name: user.name });
		if (hasExist && hasExist.length) {
			await ctx.redirect('user/signUp.tpl', {
				title: '注册',
				msg: '账号已存在',
				error: true,
				user,
			});
		} else {
			const success = await service.user.newAndSave(user);
			if (success) {
				const list = await service.blog.findByQuery();
				await ctx.redirect('/blog', { title: '博客列表', msg: '注册成功', list });
			} else {
				await ctx.redirect('user/signUp.tpl', {
					title: '注册',
					msg: '注册失败',
					error: true,
					user,
				});
			}
		}
	}
	async signIn() {
		const { ctx } = this;
		await ctx.render('user/signIn.tpl', { title: '登录' });
	}
	async login() {
		const { ctx, service } = this;
		const user = ctx.request.body;
		ctx.validate(userRule, user);
		const success = await service.user.findByQuery(user);
		if (success) {
			const list = await service.blog.findByQuery();
			await ctx.redirect('/blog', { title: '博客列表', msg: '登录成功', list });
		} else {
			await ctx.redirect('user/signUp.tpl', {
				title: '登录',
				msg: '账号或密码错误',
				error: true,
				user,
			});
		}
	}
}

module.exports = UserController;
