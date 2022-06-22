import { createLogger, format, transports } from 'winston'

export default createLogger({
  format: format.combine(format.simple()),
  transports: [
    new transports.File({
      level: 'warn',
      maxsize: 5120000,
      maxFiles: 5,
      filename: './src/logs/warn.log'
    }),
    new transports.File({
      level: 'error',
      maxsize: 5120000,
      maxFiles: 5,
      filename: './src/logs/error.log'
    }),
    new transports.Console({
      level: 'info'
    })
  ]
})
