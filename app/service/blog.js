'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
	async newAndSave(blog) {
		const { app } = this;
		const result = await app.mysql.insert('blog', blog);
		const insertSuccess = result.affectedRows === 1;
		return insertSuccess;
	}
	async findByQuery() {
		const { app } = this;
		const list = await app.mysql.select('blog', {
			// where: query,
			columns: [ 'id', 'title' ],
			orders: [[ 't_create', 'desc' ], [ 'id', 'desc' ]],
			limit: 10, // 返回数据量
			offset: 0, // 数据偏移量
		});
		return list;
	}
	async findById(id) {
		const { app } = this;
		const blog = await app.mysql.get('blog', { id });
		return blog;
	}
}

module.exports = BlogService;
