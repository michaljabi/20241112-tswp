// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/dev-database.sqlite'
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/dev'
    }
  }
};
