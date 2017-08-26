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


};
