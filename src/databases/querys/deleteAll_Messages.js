import { options as sqliteDB } from '../options/sqliteDB.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(sqliteDB);

(async () => {
  try {
    await knex('messages').delete()
    logger.info('Delete messages has been successfully')
  } catch (error) {
    throw new Error(error)
  }
})()
