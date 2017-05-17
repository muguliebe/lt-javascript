import GitHubApiClient from './GitHubApiClient'

export default class Main {
  async start() {
    logger.info('start')

    const client = new GitHubApiClient()
    const user = await client.fetchUser('muguliebe')
    logger.info(user)
  }
}
