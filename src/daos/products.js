// import { options as mariaDB } from '../databases/options/mariaDB.js'
// import {options as sqliteDB} from '../databases/options/sqliteDB.js';
import { options as postgreSQL } from '../databases/options/postgreSQL.js'
import { Container } from './container.js'

export const containerProducts = new Container(postgreSQL, 'products')
