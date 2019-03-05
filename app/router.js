'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/user/signUp', controller.user.signUp);
	router.post('/user/signUp', controller.user.register);
	router.get('/user/signIn', controller.user.signIn);
	router.post('/user/signIn', controller.user.login);
	router.get('/blog', controller.blog.index);
	router.get('/blog/add', controller.blog.new);
	router.post('/blog', controller.blog.create);
	router.get('/blog/:id/edit', controller.blog.edit);
	router.post('/blog/:id', controller.blog.update);
	router.get('/blog/:id/del', controller.blog.destroy);
	router.get('/blog/:id', controller.blog.show);
	router.get('/category', controller.category.index);
	router.get('/category/add', controller.category.new);
	router.post('/category', controller.category.create);
	router.get('/category/:id/edit', controller.category.edit);
	router.post('/category/:id', controller.category.update);
	router.get('/category/:id', controller.category.show);
};
