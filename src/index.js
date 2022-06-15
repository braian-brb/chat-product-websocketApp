import { httpServer } from './app.js'
import config from './config/index.config.js'
import cluster from 'cluster'
import { cpus } from 'os'
import './database.js'

const MODE = (config.MODE).toUpperCase()

const upServer = (mode) => {
  httpServer.listen(config.PORT, () => {
    console.log(`${mode}: PID [${process.pid}] Server running on http://localhost:${config.PORT}`)
  })
}

if (MODE === 'CLUSTER') {
  const numCPUs = cpus().length
  if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }
  } else {
  // Up server in cluster mode
    upServer(MODE)
    console.log(`Worker cluster PID: [${process.pid}] started`)
  }
} else {
  // Up server in fork mode
  upServer(MODE)
}
