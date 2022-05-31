import { Router } from 'express';
import { faker } from '@faker-js/faker';

export const router = Router();


// ****************************** TEST FAKER ****************************
router.get('/api/products-test', async (req, res) => {
  const productsFaker = [];
  for (let i = 0; i < 5; i++) {
    productsFaker.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    });
  }
  res.render('table', { products: productsFaker });
});
//-------------- GETTERS ---------------//
router.get('/', (req, res) => {
  const name = req.session.name;
  if (!name) res.redirect('/login');
  else res.redirect('/home');
});

router.get('/home', (req, res) => {
  const name = req.session.name;
  if (!name) res.redirect('/login');
  else res.render('home', { name });
});

router.get('/login', (req, res) => {
  res.render('login');
});
//-------------- POST ---------------//
router.post('/login', (req, res) => {
  req.session.name = req.body.name;
  console.log(req.session.name);
  res.redirect('/home');
});

router.post('/logout', (req, res) => {
  const name = req.session.name;
  req.session.destroy((err) => {
    if (!err) res.render('logout', { name });
    else res.send({ status: 'Logout ERROR', body: err });
  });
});