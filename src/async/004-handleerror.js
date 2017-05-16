import GitHubApiClient from './GitHubApiClient'

export default class Main {
  async start() {
    logger.info('start')

    const client = new GitHubApiClient()
    try {
      const user = await client.fetchUser('ifDontExist')
      logger.info(user)
    } catch (err) {
      logger.error(`Error: ${err.message}`)
    }
  }
}
