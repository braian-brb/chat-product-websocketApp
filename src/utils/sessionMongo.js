import session from 'express-session'
import connectMongo from 'connect-mongo'
import config from '../config/index.config.js'

const MongoStore = connectMongo.create({
  mongoUrl: `${config.MONGO_DB_HOST}/${config.MONGO_DB_SESSIONS_DATABASE}?retryWrites=true&w=majority`,
  ttl: (60 * 10)
})

export const sessionMongo = session({
  store: MongoStore,
  secret: config.SECRET_PHRASE,
  resave: false,
  saveUninitialized: false
})
