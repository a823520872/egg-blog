'use strict';

const Controller = require('egg').Controller;
const userRule = {
	name: 'string',
	pass: 'password',
};

class UserController extends Controller {
	async signUp() {
		const { ctx } = this;
		await ctx.render('user/signUp.tpl', { title: '注册' });
	}
	async register() {
		const { ctx, service } = this;
	}
	async signIn() {
		const { ctx } = this;
		await ctx.render('user/signIn.tpl', { title: '登录' });
	}
	async login() {
		const { ctx, service } = this;
	}
}

module.exports = UserController;
