import options from "../options/sqliteDB.js";
import knexModule from 'knex';
const knex = knexModule(options);


//delete articulos

(async() => {
    try {
        await knex.from('products').where({name: 'calculadora'}).del();
        console.log('products deleted successfully')
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }

})();
