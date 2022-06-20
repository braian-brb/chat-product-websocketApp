import { Router } from 'express'
import { fork } from 'child_process'
import config from '../config/index.config.js'

export const router = Router()

router.get('/', (req, res) => {
  const PORT = config.PORT
  // mayuscula
  const { CANT = 100000000 } = req.query
  console.log(CANT)
  const randomChild = fork('./src/child_process/random.child.js')
  randomChild.send(CANT)
  randomChild.on('message', result => {
    res.render('apiRandom/apiRandom', { result, PORT })
  })
})
