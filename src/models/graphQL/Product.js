import { buildSchema } from 'graphql'

class Product {
  constructor (name, price, thumbnail) {
    this.name = name
    this.price = price
    this.thumbnail = thumbnail
  }
}

const schema = buildSchema(`
  type Product {
    id: ID!
    name: String,
    price: Float,
    thumbnail: String
  }
  input ProductInput {
    name: String,
    price: Float,
    thumbnail: String
  }
  type Query {
    allProducts(campo: String, valor: String): [Product],
    product(id: ID!): Product
  }
  type Mutation { 

    addProduct(
      name: String!,
      price: Float!,
      thumbnail: String!
    ): Product,
    updateProduct(id: ID!, data: ProductInput): Product
    deleteProduct(id: ID!): Product,

  }
`)

export { Product, schema }
