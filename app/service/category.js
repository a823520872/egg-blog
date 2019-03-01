'use strict';

const Service = require('egg').Service;
const tb = 'category';

class CategoryService extends Service {
	async newAndSave(category) {
		const result = await this.app.mysql.insert(tb, category);
		const insertSuccess = result.affectedRows === 1;
		return insertSuccess;
	}
	async findByQuery() {
		const { app } = this;
		const list = await app.mysql.select(tb, {
			columns: [ 'id', 'name' ],
			orders: [[ 'id', 'desc' ]],
			limit: 10, // 返回数据量
			offset: 0, // 数据偏移量
		});
		return list;
	}
	async findById(id) {
		const { app } = this;
		const category = await app.mysql.get(tb, { id });
		return category;
	}
	async update(category) {
		const { app } = this;
		const result = await app.mysql.update(tb, category);
		const success = result.affectedRows === 1;
		return success;
	}
	async findAllByQuery() {
		const { app } = this;
		const list = await app.mysql.select(tb, {
			columns: [ 'id', 'name' ],
			orders: [[ 'id', 'desc' ]],
		});
		return list;
	}
}

module.exports = CategoryService;
