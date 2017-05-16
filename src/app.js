// =============================================================================
// init
const winston = require('winston')
import 'regenerator-runtime/runtime' // for async/await

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
// import Main from './basic/002-operators'
// import Main from './basic/003-datatypes'
// import Main from './basic/004-functions'
// import Main from './basic/005-functions2'
// import Main from './basic/006-objects'
// import Main from './basic/007-objects2'
// import Main from './basic/008-objects3'

// =============================================================================
// es6
// import Main from './es6/001-arrow'
// import Main from './es6/002-let'
// import Main from './es6/003-const'
// import Main from './es6/004-shorthand'
// import Main from './es6/005-spread'
// import Main from './es6/006-template'
// import Main from './es6/007-assignment'
// import Main from './es6/008-assignment'
import Main from './es6/009-modules'

// =============================================================================
// functional
// import Main from './functional/001-higher-order'
// import Main from './functional/002-map'
// import Main from './functional/003-reduce'
// import Main from './functional/004-reduce'
// import Main from './functional/005-currying'
// import Main from './functional/006-recursion'
// import Main from './functional/007-promise'

// =============================================================================
// async
// import Main from './async/001-first'
// let main = new Main()
// main.start()
