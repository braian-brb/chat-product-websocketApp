import { Router } from 'express'
import { faker } from '@faker-js/faker'
import { helpers } from '../middlewares/isAuth.js'
const { isAuth } = helpers

export const router = Router()

// ****************************** TEST FAKER ****************************
router.get('/api/products-test', async (req, res) => {
  const productsFaker = []
  for (let i = 0; i < 5; i++) {
    productsFaker.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image()
    })
  }
  res.render('table', { products: productsFaker })
})
// -------------- GETTERS ---------------//
router.get('/', (req, res) => {
  res.redirect('/users/signin')
})

router.get('/home', isAuth, (req, res) => {
  const { email } = req.user
  res.render('home', { email })
})
// login normal session
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', (req, res) => {
  const { email } = req.user
  req.session.destroy((err) => {
    if (!err) res.render('logout', { email })
    else res.send({ status: 'Logout ERROR', body: err })
  })
})
// -------------- POST ---------------//
router.post('/login', (req, res) => {
  req.session.name = req.body.name
  console.log(req.session.name)
  res.redirect('/home')
})
