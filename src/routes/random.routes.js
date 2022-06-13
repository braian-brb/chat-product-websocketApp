import { Router } from 'express'
import { fork } from 'child_process'
export const router = Router()

router.get('/', (req, res) => {
  const { cant = 100000000 } = req.query
  const randomChild = fork('./src/child_process/random.child.js')
  randomChild.send(cant)
  randomChild.on('message', result => {
    res.json({ result })
  })
})
