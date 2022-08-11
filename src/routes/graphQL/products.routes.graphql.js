import { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema as schemaProduct } from '../../models/graphQL/Product.js'

import ProductsControllerGraphQL from '../../controllers/graphQL/products.controllers.graphql.js'

const router = Router()

router.use('/', graphqlHTTP({
  schema: schemaProduct,
  rootValue: ProductsControllerGraphQL,
  graphiql: true
}))

export default router
