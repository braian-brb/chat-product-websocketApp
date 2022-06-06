import { options as sqliteDB } from '../options/sqliteDB.js'
import knexModule from 'knex'
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
    console.log('Table messages has been created')
  } catch (err) {
    console.log(err)
  } finally {
    knex.destroy()
  }
})()
