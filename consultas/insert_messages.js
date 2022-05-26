import options from "../options/sqliteDB.js";
import knexModule from 'knex';
const knex = knexModule(options);


const messages = [
  { email: "Ernesto", message: "Open" },
  { email: "Braian", message: "o mai go" },
  { email: "Jose", message: "Se fue" },
];
(async () => {
  try {
    await knex("messages").insert(messages);
    console.log("insert messages has been sucessfully");
  } catch (err) {
    console.log(err);
  } finally {
    knex.destroy();
  }
})();
