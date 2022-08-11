import { containerProducts } from '../../daos/index.js'
import { Product } from '../../models/graphQL/Product.js'

class ProductServiceGraphQL {
  async getAll () {
    return await containerProducts.getAll()
  }

  async getById (id) {
    return await containerProducts.getById(id)
  }

  async save ({ name, price, thumbnail }) {
    const newProduct = new Product(name, price, thumbnail)
    const productCreated = await containerProducts.create(newProduct)
    const savedProduct = {
      id: (typeof productCreated !== 'object') ? productCreated : productCreated.id,
      ...newProduct
    }
    return savedProduct
  }

  async update ({ id, data }) {
    const { name, price, thumbnail } = data
    const newProduct = new Product(name, price, thumbnail)
    return await containerProducts.updateById(id, newProduct)
  }

  async delete (id) {
    return await containerProducts.deleteById(id)
  }
}

export default new ProductServiceGraphQL()
