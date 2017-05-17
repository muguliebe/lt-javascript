function * greet() {
  console.log(`You called 'next()'`)
  yield 'hello'
}

let greeter = greet()
console.log(greeter)
let next = greeter.next()
console.log(next)
let done = greeter.next()
console.log(done)

// =============================================================================
function * graph() {
  let x = 0
  let y = 0
  while (true) {
    yield {x: x, y: y}
    x += 2
    y += 1
  }
}

let graphGenerator = graph()
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
