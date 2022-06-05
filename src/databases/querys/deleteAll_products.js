import {options as mariaDB}  from '../options/mariaDB.js';
import knexModule from 'knex';
const knex = knexModule(mariaDB);

(async () => {
  try {
    await knex('products').delete();
    console.log('Delete products has been successfully');
  } catch (error) {
    console.log(error);
  }
})();
