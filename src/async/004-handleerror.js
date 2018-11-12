const fetchUser = require('./002-promise');

(async () => {
  console.log('start')
  try {
    const user = await fetchUser('ifDontExist')
    console.log(user)
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
})()
