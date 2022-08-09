import { Router } from 'express'
import { usersController } from '../controllers/index.controllers.js'

const router = Router()

const {
  renderSignUpForm,
  renderSignInForm,
  singUp,
  signIn,
  logout
} = usersController

router.get('/signup', renderSignUpForm)
router.post('/signup', singUp)

router.get('/signin', renderSignInForm)
router.post('/signin', signIn)

router.get('/logout', logout)

export default router
