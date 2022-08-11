import { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema as schemaMessage } from '../../models/graphQL/Message.js'

import MessageControllerGraphQL from '../../controllers/graphQL/message.controllers.graphql.js'

const router = Router()

router.use('/', graphqlHTTP({
  schema: schemaMessage,
  rootValue: MessageControllerGraphQL,
  graphiql: true
}))

export default router
