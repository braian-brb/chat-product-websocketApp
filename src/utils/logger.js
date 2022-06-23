import { createLogger, format, transports } from 'winston'
const LEVEL = Symbol.for('level')

function filterOnly (level) {
  return format(function (warn) {
    if (warn[LEVEL] === level) {
      return warn
    }
  })()
}
export default createLogger({
  format: format.combine(format.simple()),
  transports: [
    new transports.File({
      level: 'warn',
      maxsize: 5120000,
      maxFiles: 5,
      format: filterOnly('warn'),
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
