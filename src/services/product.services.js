import { containerProducts } from '../daos/index.js'

class ProductService {
  async getAllProducts () {
    return await containerProducts.getAll()
  }

  async saveNewProduct (product) {
    return await containerProducts.save(product)
  }
}

export default new ProductService()
