// import { options as mariaDB } from '../options/mariaDB.js'
import { options as postgreSQL } from '../options/postgreSQL.js'
import knexModule from 'knex'
import logger from '../../utils/logger.js'
const knex = knexModule(postgreSQL)

const products = [
  {
    name: 'Producto 1',
    price: 100,
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    name: 'Producto 2',
    price: 200,
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    name: 'Producto 3',
    price: 300,
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    name: 'Producto 4',
    price: 400,
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    name: 'Producto 5',
    price: 500,
    thumbnail: 'https://via.placeholder.com/150'
  }
];

(async () => {
  try {
    await knex('products').insert(products)
    logger.info('Insert products has been successfully')
  } catch (error) {
    throw new Error(error)
  }
})()
