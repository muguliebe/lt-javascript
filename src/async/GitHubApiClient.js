import fetch from 'node-fetch'

export default class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`
    const response = await fetch(url)
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }
}
