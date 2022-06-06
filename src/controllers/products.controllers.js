import { options as mariaDB } from '../databases/options/mariaDB.js'
// import {options as sqliteDB} from '../databases/options/sqliteDB.js';
import { Container } from '../services/container.js'

export const containerProducts = new Container(mariaDB, 'products')
