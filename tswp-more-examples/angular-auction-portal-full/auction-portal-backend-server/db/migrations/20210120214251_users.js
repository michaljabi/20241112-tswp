
exports.up = function(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary()
		table.string('name')

		table.string('email').unique()
		table.string('password')

		table.timestamps(false, true)
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('users')
};
