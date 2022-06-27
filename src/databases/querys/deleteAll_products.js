import { options as mariaDB } from '../options/mariaDB.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(mariaDB);

(async () => {
  try {
    await knex('products').delete()
    logger.info('Delete products has been successfully')
  } catch (error) {
    throw new Error(error)
  }
})()
