import { Router } from 'express';
import { faker } from '@faker-js/faker';

export const router = Router();

router.get('/', (req, res) => {
  res.render('home');
});

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
