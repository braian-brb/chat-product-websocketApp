import { Router } from 'express'

import productsGraphQlRouter from './graphQL/products.routes.graphql.js'
import MessagesGraphQlRouter from './graphQL/message.routes.graphql.js'

const router = Router()

// ****************************** GraphQL ****************************//

router.use('/products', productsGraphQlRouter)
router.use('/messages', MessagesGraphQlRouter)

// ****************************** END GraphQL ****************************//

export default router
