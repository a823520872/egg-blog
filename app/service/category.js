'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
	async newAndSave(category) {
		const result = await this.app.mysql.insert('category', category);
		const insertSuccess = result.affectedRows === 1;
		return insertSuccess;
	}
	async findByQuery() {
		const { app } = this;
		const list = await app.mysql.select('category', {
			// where: query,
			columns: [ 'id', 'name' ],
			orders: [[ 'id', 'desc' ]],
			limit: 10, // 返回数据量
			offset: 0, // 数据偏移量
		});
		return list;
	}
	async findById(id) {
		const { app } = this;
		const category = await app.mysql.get('category', { id });
		return category;
	}
}

module.exports = CategoryService;
