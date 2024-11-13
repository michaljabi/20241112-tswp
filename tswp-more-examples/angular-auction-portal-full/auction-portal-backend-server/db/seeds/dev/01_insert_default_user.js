

exports.seed = function(knex) {
	return knex('users').del()
		.then(() => knex('users')
			.insert([
				{id: 1, name: 'John', email: 'john@doe.com', password: '$2b$10$k9xyolzWyRCgemlOT7a7MOKCytdo0a9rCfvjM3zSPSExoDNjlUQ/C'}
			])
		);
};
