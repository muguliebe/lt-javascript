import fetch from 'node-fetch'

export default class Main {
  start() {
    logger.info(`index`)
    this.fetchGitHubUser('muguliebe')
      .then(user => {
        logger.info(user.name)
      })
  }

  async fetchGitHubUser(id) {
    const url = `https://api.github.com/users/${id}`
    const response = await fetch(url)
    return await response.json()
  }
}
