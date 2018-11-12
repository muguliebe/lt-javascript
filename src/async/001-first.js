const axios = require('axios')

const showGitHubUser = async () => {
  console.log(`go?`)
  const url = `https://api.github.com/users/muguliebe`
  const res = await axios.get(url)
  const user = res.data
  console.log(user.name)
  console.log(user.location)
  console.log(user)
}

showGitHubUser()
