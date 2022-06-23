import express, { urlencoded, json } from 'express'
import { engine } from 'express-handlebars'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import compression from 'compression'
import passport from 'passport'
// pasar todo a un index de cada carpeta e importar desde ahi, ejemplo todas las routes hacer un index.js y de ahi que se exporte todo
import './middlewares/passport.js'
import {
  errorHandler,
  globalVars,
  loggerNonExistent
} from './middlewares/index.js'
import {
  usersRouter,
  homeRouter,
  infoRouter,
  randomRouter
} from './routes/index.js'
import { logger, randomNumberToJSON, sessionMongo } from './utils/index.js'
import { containerMessages, containerProducts } from './daos/index.js'

export const app = express()
export const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

export const __dirname = dirname(fileURLToPath(import.meta.url))

/* ------- SETTINGS ------- */
// app.set('PORT', PORT || 8080)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')
/* ------- MIDLEWARES ------- */
// app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(sessionMongo)
app.use(flash())
// PASSPORT NECESITA QUE PRIMERO ESTE EL SESSION PORQUE HACE USO DE EL
app.use(passport.initialize())
app.use(passport.session())
app.use(compression())

/* ------- GLOBAL VAR ------- */
app.use(globalVars)

/* ------- ROUTES ------- */
app.use(homeRouter)
app.use('/users', usersRouter)
app.use('/info', infoRouter)
app.use('/api/random', randomRouter)
app.use(loggerNonExistent)
/* ------- VIEWS ------- */
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {
      randomNumberToJSON
    }
  })
)
// ****************************** PRODUCTS LIST ****************************//
io.on('connection', async (socket) => {
  try {
    logger.info('a user connected')
    const products = await containerProducts.getAll()
    socket.emit('products-list', products)

    socket.on('new-product', async (product) => {
      await containerProducts.save(product)
      const products = await containerProducts.getAll()
      io.sockets.emit('products-list', products)
    })
  } catch (error) {
    logger.error(error)
  }
})
// ****************************** MESSAGE CENTER ****************************//
io.on('connection', async (socket) => {
  const messages = await containerMessages.getAll()
  socket.emit('messages-list', messages)

  socket.on('new-message', async (message) => {
    await containerMessages.save(message)
    const messages = await containerMessages.getAll()
    io.sockets.emit('messages-list', messages)
  })
})
// ****************************** END WEBSOCKET ****************************//
// ERROR HANDLER
app.use(errorHandler)
