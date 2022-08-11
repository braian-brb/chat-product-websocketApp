// import { options } from '../databases/options/sqliteDB.js'
import { options } from '../databases/options/mariaDB.js'
// import { options } from '../databases/options/postgreSQL.js'
import { Container } from './container.js'

export const containerProducts = new Container(options, 'products')
