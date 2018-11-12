const bluebird = require('bluebird')

const start = async () => {
  console.log('start')
  await bluebird.delay(2000)
  console.log('end')
}

start()
