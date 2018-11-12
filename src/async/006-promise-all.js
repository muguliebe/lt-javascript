const axios = require('axios')

const showUserAndRepos = async (handle) => {
  console.log(`showUserAndRepos`)

  const [user, repos] = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`)
  ])

  // let user = results[0]
  // let repos = results[1]

  console.log(user.name)
  console.log(repos.length)
}

const fetchFromGitHub = async (endpoint) => {
  const url = `https://api.github.com${endpoint}`

  console.log(`${url} start`)
  const res = await axios.get(url)
  console.log(`${url} end`)

  return await res.data
}

showUserAndRepos('muguliebe')
