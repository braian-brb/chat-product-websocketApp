import productServices from '../services/product.services.js'

class ProductsController {
  async getAllProducts () {
    return await productServices.getAllProducts()
  }

  async saveNewProduct (product) {
    return await productServices.saveNewProduct(product)
  }
}

export default new ProductsController()
