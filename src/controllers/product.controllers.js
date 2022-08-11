import productServices from '../services/product.services.js'

class ProductsController {
  async allProducts () {
    return await productServices.getAll()
  }

  async addProduct (product) {
    return await productServices.save(product)
  }

  async update (product) {
    return await productServices.update(product)
  }

  async delete (id) {
    return await productServices.delete(id)
  }

  async getById (id) {
    return await productServices.getById(id)
  }
}

export default new ProductsController()
