import express from 'express';
import { urlencoded, json, } from 'express';
import { engine } from 'express-handlebars';
import { router } from './routes/index.js';
import morgan from 'morgan';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';
import { containerProducts } from './controllers/products.controllers.js';
import { containerMessages } from './controllers/messages.controllers.js';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config()

export const app = express();
export const httpServer = new HttpServer(app);
export const io = new IOServer(httpServer);

const __dirname = dirname(fileURLToPath(import.meta.url));
const MongoStore = connectMongo.create({
  mongoUrl: process.env.MONGO_URL,
  ttl: (60 * 10),
})
/*------- SETTINGS ------- */
app.set('PORT', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
/*------- MIDLEWARES ------- */
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore,
    secret: '123456789!@#$%^',
    resave: false,
    saveUninitialized: false,
  })
);
/*------- ROUTES ------- */
app.use('/', router);
/*------- VIEWS ------- */
app.engine(
    '.hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, 'views', 'layouts'),
      partialsDir: path.join(__dirname, 'views', 'partials'),
    })
  );
// ****************************** PRODUCTS LIST ****************************//
io.on('connection', async (socket) => {
  console.log('a user connected');
  const products = await containerProducts.getAll();
  socket.emit('products-list', products);

  socket.on('new-product', async (product) => {
    await containerProducts.save(product);
    const products = await containerProducts.getAll();
    io.sockets.emit('products-list', products);
  });
});
// ****************************** MESSAGE CENTER ****************************//
io.on('connection', async (socket) => {
  const messages = await containerMessages.getAll();
  socket.emit('messages-list', messages);

  socket.on('new-message', async (message) => {
    await containerMessages.save(message);
    const messages = await containerMessages.getAll();
    io.sockets.emit('messages-list', messages);
  });
});
// ****************************** END WEBSOCKET ****************************//