// ****************************** DESAFIO ENTREGABLE 16
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

import { ContainerProducts } from "./container.js";
import { ContainerMessages } from "./container.js";

import { options as sqliteDB } from "./options/sqliteDB.js";
import { options as mariaDB } from "./options/mariaDB.js";

const containerProducts = new ContainerProducts(sqliteDB);
const containerMessages = new ContainerMessages(mariaDB);

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
// ****************************** HBS ****************************
import {create} from "express-handlebars";
import path from "path";

const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout:'default',
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// ****************************** FAKER ****************************
import { faker } from "@faker-js/faker";

httpServer.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});



// ****************************** LISTA DE PRODUCTOS ****************************
io.on("connection", async function (socket) {
  const products = await containerProducts.getProducts();
  console.log("Un cliente se ha conectado");
  socket.emit("container", products);

  socket.on("new-product", async (product) => {
    await containerProducts.saveProduct(product);
    const products = await containerProducts.getProducts();
    io.sockets.emit("container", products);
  }); 
});

// ****************************** TEST FAKER ****************************
app.get("/api/products-test", async function (req, res) {
  let productsFaker = [];
  for (let i = 0; i < 5; i++) {
    productsFaker.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    });
  }
 // res.send(productsFaker);
  res.render('table', {'products': productsFaker})
});

// ****************************** CENTRO DE MENSAJES ****************************

io.on("connection", async function (socket) {
  const messages = await containerMessages.getMessages();
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", async (mensaje) => {
    await containerMessages.saveMessage(mensaje);
    const messages = await containerMessages.getMessages();
    io.sockets.emit("messages", messages);
  });
});
