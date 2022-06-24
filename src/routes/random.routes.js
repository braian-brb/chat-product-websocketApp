import { Router } from 'express'
import config from '../config/index.config.js'
import { randomNumber } from '../utils/randomNumber/randomNumber.js'
// import { fork } from 'child_process'

export const router = Router()

router.get('/', (req, res) => {
  const PORT = config.PORT
  const { CANT = 100000000 } = req.query
  const result = randomNumber(CANT)
  res.render('apiRandom/apiRandom', { result, PORT })
  // const randomChild = fork('./src/utils/randomNumber/randomNumber.js')
  // randomChild.send(CANT)
  // randomChild.on('message', result => {
  //   res.render('apiRandom/apiRandom', { result, PORT })
  // })
})
