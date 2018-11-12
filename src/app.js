/* eslint-disable no-unused-vars */

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

