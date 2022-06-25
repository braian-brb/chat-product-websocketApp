import { Router } from 'express'
import { cpus } from 'os'

export const router = Router()

router.get('/', (req, res) => {
  const info = {
    args: process.argv,
    sO: process.platform,
    nodeVersion: process.version,
    memoryRss: process.memoryUsage.rss(),
    execPath: process.execPath,
    processID: process.pid,
    pathAct: process.cwd(),
    numCPUs: cpus().length

  }
  // console.log(info)
  res.render('info/info', info)
})
