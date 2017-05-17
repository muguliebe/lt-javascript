import fetch from 'node-fetch'

export default class Main {
  async start() {
    logger.info('start....')
    await this.showUserAndRepos('muguliebe')
  }

  async showUserAndRepos(handle) {
    logger.info(`showUserAndRepos`)

    const [user, repos] = await Promise.all([
      this.fetchFromGitHub(`/users/${handle}`),
      this.fetchFromGitHub(`/users/${handle}/repos`)
    ])

    // let user = results[0]
    // let repos = results[1]

    logger.info(user.name)
    logger.info(repos.length)
  }

  async fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`
    logger.info(`${url} start`)
    const response = await fetch(url)
    logger.info(`${url} end`)
    return await response.json()
  }
}
