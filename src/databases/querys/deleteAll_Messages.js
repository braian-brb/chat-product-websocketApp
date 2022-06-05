import {options as sqliteDB} from '../options/sqliteDB.js';
import knexModule from 'knex';
const knex = knexModule(sqliteDB);

(async () => {
  try {
    await knex('messages').delete();
    console.log('Delete messages has been successfully');
  } catch (error) {
    console.log(error);
  }
})();
