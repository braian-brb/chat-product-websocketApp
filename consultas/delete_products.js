const { options } = require("./options/mariaDB.js");
const knex = require('knex')(options);


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
