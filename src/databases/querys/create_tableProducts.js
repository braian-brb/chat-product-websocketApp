// import { options as mariaDB } from '../options/mariaDB.js'
import { options as postgreSQL } from '../options/postgreSQL.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(postgreSQL);

(async () => {
  try {
    await knex.schema.dropTableIfExists('products')
    await knex.schema.createTable('products', (table) => {
      table.increments('id')
      table.string('name')
      table.integer('price')
      table.string('thumbnail')
    })
    logger.info('Table products has been created')
  } catch (err) {
    throw new Error(err)
  } finally {
    knex.destroy()
  }
})()
