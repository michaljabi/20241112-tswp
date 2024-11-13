
exports.up = function(knex) {
	return knex.schema.createTable('auctions', (table) => {
		table.increments('id').primary()

		table.string('title')
		table.text('description')
		table.string('imgUrl')
		table.decimal('price')

		table.timestamps(false, true)
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('auctions')
};
