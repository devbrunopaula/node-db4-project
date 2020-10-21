module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'db4',
      user: 'postgres',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: './database/knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
}
