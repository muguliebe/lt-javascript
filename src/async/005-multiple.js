const axios = require('axios')

const showUserAndRepos = async (handle) => {
  console.log(`showUserAndRepos`)

  let user = await fetchFromGitHub(`/users/${handle}`)
  console.log(`first call`)
  let repos = await fetchFromGitHub(`/users/${handle}/repos`)
  console.log(`second call`)

  // let userPromise = fetchFromGitHub(`/users/${handle}`)
  // console.log(`first call`)
  // let reposPromise = fetchFromGitHub(`/users/${handle}/repos`)
  // console.log(`second call`)
  // let user = await userPromise
  // let repos = await reposPromise

  console.log(user.name)
  console.log('repo count:', repos.length)
}

const fetchFromGitHub = async (endpoint) => {
  const url = `https://api.github.com${endpoint}`
  console.log(`${url} start`)
  const res = await axios.get(url)
  console.log(`${url} end`)
  return res.data
}

showUserAndRepos('muguliebe')
