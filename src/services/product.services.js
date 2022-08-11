import { containerProducts } from '../daos/index.js'
import Product from '../models/Product.js'
class ProductService {
  async getAll () {
    return await containerProducts.getAll()
  }

  async save ({ name, price, thumbnail }) {
    const newProduct = new Product(name, price, thumbnail)
    return await containerProducts.create(newProduct)
  }

  async update ({ id, name, price, thumbnail }) {
    const newProduct = new Product(name, price, thumbnail)
    console.log(newProduct)
    return await containerProducts.update(id, newProduct)
  }

  async delete (id) {
    return await containerProducts.delete(id)
  }

  async getById (id) {
    return await containerProducts.getById(id)
  }
}

export default new ProductService()
