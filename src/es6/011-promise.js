/* eslint-disable */
const d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('hello')
    } else {
      reject('no no...')
    }
  }, 10)
})

d.then(data => console.log(data))
 .catch(err => console.error('error:', error))

function testPromise(){
  let p1 = new Promise( (resolve, reject) => {
    if (true) {
      resolve('good')
    } else {
      reject('no no...')
    }
  })
  var x = {}
  p1.then(data => x = data)
    .then(whatever => console.log(x))
    .then(whatever => wow())

  let wow = function() {
    console.log('here:', x)
  }
}

testPromise()
