import fetch from 'node-fetch'

export default class Main {
  async start() {
    logger.info('start....')
    await this.showUserAndRepos('muguliebe')
  }

  async showUserAndRepos(handle) {
    logger.info(`showUserAndRepos`)

    // const user = await this.fetchFromGitHub(`/users/${handle}`)
    // logger.info(`first call`)
    // const repos = await this.fetchFromGitHub(`/users/${handle}/repos`)
    // logger.info(`second call`)

    let userPromise = this.fetchFromGitHub(`/users/${handle}`)
    logger.info(`first call`)
    let reposPromise = this.fetchFromGitHub(`/users/${handle}/repos`)
    logger.info(`second call`)

    let user = await userPromise
    let repos = await reposPromise

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
