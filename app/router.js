'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/blog', controller.blog.index);
	router.get('/blog/add', controller.blog.new);
	router.post('/blog', controller.blog.create);
	router.get('/blog/:id/edit', controller.blog.edit);
	router.post('/blog/:id', controller.blog.update);
	router.get('/blog/:id', controller.blog.show);
	router.get('/category', controller.category.index);
	// router.post('/category', controller.category.create);
	// router.get('/category/:id', controller.category.show);
};
