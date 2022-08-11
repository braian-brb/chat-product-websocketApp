import { Router } from 'express'
import usersRouter from './users.routes.js'
import homeRouter from './home.routes.js'
import infoRouter from './info.routes.js'
import randomRouter from './random.routes.js'
import graphqlRouter from './graphql.routes.js'

const router = Router()

// ****************************** GraphQL ****************************//

router.use('/graphql', graphqlRouter)

// ****************************** END GraphQL ****************************//

router.use('/', homeRouter)
router.use('/users', usersRouter)
router.use('/info', infoRouter)
router.use('/api/random', randomRouter)

export default router
