import { options as sqliteDB } from '../databases/options/sqliteDB.js'
import { Container } from './container.js'

export const containerMessages = new Container(sqliteDB, 'messages')
