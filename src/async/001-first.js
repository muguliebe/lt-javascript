import fetch from 'node-fetch'

export default class Main {
  constructor() {
    logger.info('start')
    return this
  }

  start() {
    logger.info(`index`)
    this.showGitHubUser()
  }

  async showGitHubUser() {
    logger.info(`go?`)
    const url = `https://api.github.com/users/muguliebe`
    const response = await fetch(url)
    const user = await response.json()
    logger.info(user.name)
    logger.info(user.location)
    logger.info(user)
  }
}
