// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/journey_test',
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/test'
    }
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/journey',
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/development'
    }
  },

  staging: {
    client: 'pg',
    connection: 'postgres://user:postgres@postgres:5432/journey',
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'postgres',
      database: 'journey',
      user: 'user',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeout: 30*1000,
      bailAfter: 30*1000
    },
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/production'
    }
  }

};
