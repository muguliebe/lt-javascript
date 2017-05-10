// =============================================================================
// init
const winston = require('winston')

// =============================================================================
// global variables
global.logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'debug',
      colorize: 'level'
    })
  ]
})

// =============================================================================
logger.info('start')
logger.info(`current dir: ${__dirname}`)

// =============================================================================
import Main from './basic/000-tmp'

let main = new Main()
main.start()

logger.debug('adf')
