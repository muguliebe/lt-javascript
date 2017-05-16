// ==============================================
// THIS IS NOT WORK.............

Symbol.asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator')

export default class Main {
  async start() {
    logger.info('start.')

    const generator = this.someGenerator()
    while (true) {
      const { value, done } = await generator.next()
      if (done) {
        break
      }
      logger.info(value)
    }
  }

  async * someGenerator() {
    await delay(1000)
    yield 1
    await delay(1000)
    yield 2
    await delay(1000)
    yield 3
  }
}

const delay = (ms) => new Promise(resolve => {
  settimeout(resolve, ms)
})
