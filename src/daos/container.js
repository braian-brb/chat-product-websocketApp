import knex from 'knex'

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
      throw new Error(error.message)
    }
  }

  async getAll () {
    try {
      return await this.knex.select().from(`${this.table}`)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
