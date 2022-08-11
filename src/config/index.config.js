import parseArgs from 'minimist'
import dotenv from 'dotenv'
dotenv.config()

const args = parseArgs(process.argv.slice(2))
const config = {
  PORT: process.env.PORT || args.port || args.PORT || 8080,
  MODE: args.mode || args.MODE || args.modo || args.MODO || 'fork',
  // MARIA DB
  MARIA_DB_USER: process.env.MARIA_DB_USER || 'user',
  MARIA_DB_PASSWORD: process.env.MARIA_DB_PASSWORD || 'password',
  MARIA_DB_HOST: process.env.MARIA_DB_HOST || 'localhost',
  MARIA_DB_PORT: process.env.MARIA_DB_PORT || '8000',
  MARIA_DB_DATABASE: process.env.MARIA_DB_DATABASE || 'products',
  // POSTGRESQL
  PG_DB_USER: process.env.PG_DB_USER || 'user',
  PG_DB_PASSWORD: process.env.PG_DB_PASSWORD || 'password',
  PG_DB_HOST: process.env.PG_DB_HOST || 'localhost',
  PG_DB_PORT: process.env.PG_DB_PORT || 4000,
  PG_DB_DATABASE: process.env.PG_DB_DATABASE || 'productsDB',
  // MONGO DB
  MONGO_DB_HOST: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
  MONGO_DB_USER_DATABASE: process.env.MONGO_DB_USER_DATABASE || 'usersDatabase',
  MONGO_DB_SESSIONS_DATABASE: process.env.MONGO_DB_SESSIONS_DATABASE || 'sessions',
  SECRET_PHRASE: process.env.SECRET_PHRASE || 'coderhouse',
  // API
  API_CHOSEN: args.api || args.API || 'graphql'
}

export default config
