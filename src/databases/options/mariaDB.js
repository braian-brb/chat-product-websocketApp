import config from '../../config/index.config.js'

export const options = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: config.MARIA_DB_USER,
    password: config.MARIA_DB_PASSWORD,
    database: 'desafioCoderhouse16'
  }
}
