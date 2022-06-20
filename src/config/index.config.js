import parseArgs from 'minimist'
import dotenv from 'dotenv'
dotenv.config()

const args = parseArgs(process.argv.slice(2))
const config = {
  PORT: args.port || args.PORT || 8080,
  MODE: args.mode || args.MODE || args.modo || args.MODO || 'fork',
  MARIA_DB_USER: process.env.MARIA_DB_USER || 'user',
  MARIA_DB_PASSWORD: process.env.MARIA_DB_PASSWORD || 'password',
  MONGO_DB_HOST: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
  MONGO_DB_USER_DATABASE: process.env.MONGO_DB_USER_DATABASE || 'usersDatabase',
  MONGO_DB_SESSIONS_DATABASE: process.env.MONGO_DB_SESSIONS_DATABASE || 'sessions'
}

export default config