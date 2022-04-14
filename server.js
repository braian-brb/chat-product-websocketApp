// ****************************** DESAFIO ENTREGABLE ANTERIOR
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const Container = require('./container.js');

const container = new Container();
// ****************************** DESAFIO ENTREGABLE 12

// ****************************** LISTA DE PRODUCTOS ****************************
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

httpServer.listen(8080, function () {
    console.log("Servidor corriendo en http://localhost:8080");
});

io.on("connection", async function (socket) {
    const products = await knex("products").select();
    console.log("Un cliente se ha conectado");
    socket.emit("container", products);

    socket.on("new-product", async (product) => {
        await knex("products").insert(product);
        const products = await knex("products").select();
        io.sockets.emit("container", products);
    });
});

// ****************************** CENTRO DE MENSAJES ****************************
const { options } = require("./options/mariaDB.js");
const knex = require('knex')(options);



io.on("connection", async function (socket) {

    const messages = await knex("messages").select();
    console.log("Un cliente se ha conectado");
    socket.emit("messages", messages);
  
    socket.on("new-message", async (mensaje) => {
      await knex("messages").insert(mensaje);
      const messages = await knex("messages").select();
      io.sockets.emit("messages", messages);
    });
  });
  