const axios = require('axios')

const fetchGitHubUser = async (id) => {
  const url = `https://api.github.com/users/${id}`
  const res = await axios.get(url)
  return res.data
}

fetchGitHubUser('muguliebe')
  .then(user => {
    console.log(user.name)
  })

module.exports = fetchGitHubUser
