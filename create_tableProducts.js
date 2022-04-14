const { options } = require("./options/mariaDB.js");
const knex = require('knex')(options);

//Se crea una nueva tabla con la funcion create table del esquema knex.js definimos el esquema para que contenga tres columnas id nombre y precio

(async () => {
    try {
        await knex.schema.dropTableIfExists('products');
        await knex.schema.createTable("products", (table) => {
            table.increments("id");
            table.string("name");
            table.integer('price');
            table.string('thumbnail');
        });
        console.log("Table products has been created");
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})();
 