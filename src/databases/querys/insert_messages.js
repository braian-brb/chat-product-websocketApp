import { options as sqliteDB } from '../options/sqliteDB.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(sqliteDB)

const messages = [
  { email: 'Ernesto', message: 'Open' },
  { email: 'Braian', message: 'o mai go' },
  { email: 'Jose', message: 'Se fue' }
];
(async () => {
  try {
    await knex('messages').insert(messages)
    logger.info('insert messages has been sucessfully')
  } catch (err) {
    throw new Error(err)
  } finally {
    knex.destroy()
  }
})()
