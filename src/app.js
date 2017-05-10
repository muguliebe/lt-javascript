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

// =============================================================================
// Basic
// import Main from './basic/000-tmp'
// import Main from './basic/001-syntax'
import Main from './basic/002-operators'

// =============================================================================
// Main classes
