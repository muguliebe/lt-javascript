import Bluebird from 'bluebird'

export default class Main {
  async start() {
    logger.info('start....')

    await Bluebird.delay(2000)
    logger.info('done')
  }
}
