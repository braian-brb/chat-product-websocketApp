import config from '../../config/index.config.js'

export const options = {
  client: 'mysql',
  connection: {
    host: config.MARIA_DB_HOST,
    port: config.MARIA_DB_PORT,
    user: config.MARIA_DB_USER,
    password: config.MARIA_DB_PASSWORD,
    database: config.MARIA_DB_DATABASE
  }
}
