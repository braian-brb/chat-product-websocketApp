import { options as sqliteDB } from '../options/sqliteDB.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(sqliteDB);

(async () => {
  try {
    await knex.schema.dropTableIfExists('messages')
    await knex.schema.createTable('messages', (table) => {
      table.increments('id')
      table.string('email')
      table.string('message')
      table.string('date')
    })
    logger.info('Table messages has been created')
  } catch (err) {
    throw new Error(err)
  } finally {
    knex.destroy()
  }
})()
