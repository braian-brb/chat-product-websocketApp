import { options as mariaDB } from '../options/mariaDB.js'
import knexModule from 'knex'
const knex = knexModule(mariaDB);

(async () => {
  try {
    await knex.schema.dropTableIfExists('products')
    await knex.schema.createTable('products', (table) => {
      table.increments('id')
      table.string('name')
      table.integer('price')
      table.string('thumbnail')
    })
    console.log('Table products has been created')
  } catch (err) {
    console.log(err)
  } finally {
    knex.destroy()
  }
})()
