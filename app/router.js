'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/blog', controller.blog.index);
  router.get('/blog/:id', controller.blog.show);
};
