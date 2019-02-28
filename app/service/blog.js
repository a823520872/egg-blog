'use strict';

const Service = require('egg').Service;
const list = [{ id: 1, title: 'this is blog 1', url: '/blog/1' }, { id: 2, title: 'this is blog 2', url: '/blog/2' }];

class BlogService extends Service {
  async findByQuery(query, opt) {
    return list;
  }
  async findById(id) {
    //   const
  }
}

module.exports = BlogService;
