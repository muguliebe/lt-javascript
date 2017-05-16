/* eslint-disable */
var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('hello')
    } else {
      reject('no no...')
    }
  }, 2000)
})

d.then(data => console.log('success:', data))
d.catch(err => console.error('error:', error))
