import { Router } from 'express'
import { usersCtrl } from '../controllers/users.controllers.js'

const router = Router()

const {
  renderSignUpForm,
  renderSignInForm,
  singUp,
  signIn,
  logout
} = usersCtrl

router.get('/signup', renderSignUpForm)
router.post('/signup', singUp)

router.get('/signin', renderSignInForm)
router.post('/signin', signIn)

router.get('/logout', logout)

export default router
