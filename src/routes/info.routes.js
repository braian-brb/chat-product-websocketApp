import { Router } from 'express'

export const router = Router()

router.get('/info', (req, res) => {
  res.json({
    args: process.argv,
    sO: process.platform,
    nodeVersion: process.version,
    memoryRss: process.memoryUsage.rss(),
    execPath: process.execPath,
    processID: process.pid,
    pathAct: process.cwd()
  })
})
