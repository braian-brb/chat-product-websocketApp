import logger from '../utils/logger.js'
export const loggerNonExistent = (req, res, next) => {
  logger.warn(`Non-existent resource URL: ${req.url} Method: ${req.method}`)
  next()
}
