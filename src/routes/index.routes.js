import { Router } from 'express'
import usersRouter from './users.routes.js'
import homeRouter from './home.routes.js'
import infoRouter from './info.routes.js'
import randomRouter from './random.routes.js'

const router = Router()

router.use('/', homeRouter)
router.use('/users', usersRouter)
router.use('/info', infoRouter)
router.use('/api/random', randomRouter)

export default router
