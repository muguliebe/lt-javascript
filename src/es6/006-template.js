var salutation = 'Hello'
var greeting = `${salutation}, Worrld`
console.log(greeting)

// =============================================================================
function tag(strings, ...values) {
  console.log(strings)
  console.log(values)
  return `${strings[0]}${values[0]}${strings[1]}`
}

var message = tag`i'm a string and ${new Date().getHours()} ...`
console.log(message)
