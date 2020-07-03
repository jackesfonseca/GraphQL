// Update with your config settings.

const {connection} = require('./.env') //As informações com o banco de daos foram externalizadas
module.exports = {

  client: 'mysql',
  connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
