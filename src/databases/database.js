import mongoose from 'mongoose'
import config from '../config/index.config.js'
import logger from '../utils/logger.js'

const {
  MONGO_DB_HOST,
  MONGO_DB_USER_DATABASE
} = config

const MONGODB_URI = `${MONGO_DB_HOST}/${MONGO_DB_USER_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => logger.info(`database connected: ${db.connection.name}`))
  .catch(err => { throw new Error(err) })
