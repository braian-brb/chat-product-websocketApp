import config from '../../config/index.config.js'

export const options = {
  client: 'postgres',
  connection: {
    user: config.PG_DB_USER,
    password: config.PG_DB_PASSWORD,
    host: config.PG_DB_HOST,
    port: config.PG_DB_PORT,
    database: config.PG_DB_DATABASE
  }
}
