import {options as sqliteDB} from '../utils/options/sqliteDB.js';
import { Container } from '../services/container.js';

export const containerMessages = new Container(sqliteDB, 'messages');