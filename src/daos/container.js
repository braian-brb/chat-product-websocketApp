import knex from 'knex'
import logger from '../utils/logger.js'

export class Container {
  constructor (config, table) {
    this.config = config
    this.table = table
    this.knex = knex(config)
  }

  async save (obj) {
    try {
      await this.knex.insert(obj).into(`${this.table}`)
    } catch (error) {
      logger.error(error)
    }
  }

  async getAll () {
    try {
      return await this.knex.select().from(`${this.table}`)
    } catch (error) {
      logger.error(error)
    }
  }
}
