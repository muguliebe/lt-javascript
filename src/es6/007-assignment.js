var { color, position } = {
  color: 'blue',
  name: 'John',
  state: 'New York',
  position: 'Forward'
}

console.log(color)
console.log(position)

// =============================================================================
function generateObj() {
  return {
    color: 'blue',
    name: 'John',
    state: 'New York',
    position: 'Forward'
  }
}

var { name, state } = generateObj()
console.log(name)
console.log(state)

// =============================================================================
var { name: firstName, state: location } = generateObj()
console.log(firstName)
console.log(location)

// =============================================================================
var [first, , , , fifth] = ['red', 'yellow', 'green', 'blue', 'orange']
console.log(first)
console.log(fifth)
