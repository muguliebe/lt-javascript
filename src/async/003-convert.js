const fetchUser = require('./002-promise')

const start = async () => {
  const user = await fetchUser('muguliebe')
  console.log(user)
}

start()
