//const { options } = require("../options/sqliteDB");
//const knex = require('knex')(options);

import options from "../options/sqliteDB.js";
import knexModule from 'knex';
const knex = knexModule(options);

//Se crea una nueva tabla con la funcion create table del esquema knex.js definimos el esquema para que contenga tres columnas id nombre y precio

(async () => {
    try {
        await knex.schema.dropTableIfExists('messages');
        await knex.schema.createTable("messages", (table) => {
            table.increments("id");
            table.string("email");
            table.string('message');
            table.string('date');
        });
        console.log("Table messages has been created");
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
})();
 