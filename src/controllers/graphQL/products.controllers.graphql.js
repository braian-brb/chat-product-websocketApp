import productServicesGraphql from '../../services/graphQL/product.services.graphql.js'

class ProductsControllerGraphQL {
  async allProducts () {
    return await productServicesGraphql.getAll()
  }

  async product (id) {
    return await productServicesGraphql.getById(id)
  }

  async addProduct (product) {
    return await productServicesGraphql.save(product)
  }

  async updateProduct (product) {
    // console.log(product)
    return await productServicesGraphql.update(product)
  }

  async deleteProduct (id) {
    return await productServicesGraphql.delete(id)
  }
}

export default new ProductsControllerGraphQL()
