import logger from '../utils/logger.js'
export const errorHandler = (error, req, res, next) => {
  logger.error(error.message)
  res.status(500).json({ error: `Something wrong: ${error.message}` })
}
