import fetch from 'node-fetch'

export default class Main {
  constructor() {
    logger.info('start')
    this.start()
    return this
  }

  start() {
    logger.info(`index`)
    this.showGitHubUser()
  }

  showGitHubUser() {
    logger.info(`go?`)
    const url = `https://api.github.com/users?page=1&per_page=100`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(users => {
        users.forEach(user => {
          logger.info(`${user.id} : ${user.login}`)
        })
      })
      .catch(err => logger.error(`error occured : ${err}`))
  }
}
