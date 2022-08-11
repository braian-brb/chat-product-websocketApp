import knex from 'knex'

export class Container {
  constructor (config, table) {
    this.config = config
    this.table = table
    this.knex = knex(config)
  }

  async create (obj) {
    try {
      const id = await this.knex.insert(obj, ['id']).into(`${this.table}`)
      return id[0]
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

  async getById ({ id }) {
    try {
      // el first porque devuelve un array
      const objectFind = await this.knex.select().from(`${this.table}`).where({ id }).first()
      // console.log(objectFind)
      return objectFind
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async deleteById ({ id }) {
    try {
      // compatible con postgresql pero no con mariadb ni sqlite ni mysql
      // const deletedItem = await this.knex(this.table).where({ id }).del().returning('*')

      const itemToDelete = await this.getById({ id })
      await this.knex(this.table).where({ id }).del()

      console.log(itemToDelete)
      return itemToDelete
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateById (id, datos) {
    try {
      await this.knex(this.table).where({ id }).update(datos)
      // console.log(await this.getById({ id }))
      return await this.getById({ id })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
