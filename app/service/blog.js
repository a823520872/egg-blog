'use strict';

const Service = require('egg').Service;
const tb = 'blog';

class BlogService extends Service {
	async newAndSave(blog) {
		const { app } = this;
		const result = await app.mysql.insert(tb, blog);
		const success = result.affectedRows === 1;
		return success;
	}
	async findByQuery() {
		const { app } = this;
		const list = await app.mysql.select(tb, {
			// where: query,
			columns: [ 'id', 'title' ],
			orders: [[ 't_update', 'desc' ], [ 't_create', 'desc' ], [ 'id', 'desc' ]],
			limit: 10, // 返回数据量
			offset: 0, // 数据偏移量
		});
		return list;
	}
	async findById(id) {
		const { app } = this;
		const blog = await app.mysql.get(tb, { id });
		return blog;
	}
	async update(blog) {
		const { app } = this;
		const result = await app.mysql.update(tb, blog);
		const success = result.affectedRows === 1;
		return success;
	}
	async del(id) {
		const result = await this.app.mysql.delete(tb, { id });
		console.log(result);
		const success = result.affectedRows === 1;
		return success;
	}
}

module.exports = BlogService;
