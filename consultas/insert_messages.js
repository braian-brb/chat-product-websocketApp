const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);


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
