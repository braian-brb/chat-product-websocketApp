import {options as mariaDB} from '../utils/options/mariaDB.js';
// import {options as sqliteDB} from '../utils/options/sqliteDB.js';
import { Container } from '../services/container.js';

export const containerProducts = new Container(mariaDB, 'products');