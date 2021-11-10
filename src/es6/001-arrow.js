var createGreet = function(message, name) {
  return message + ' ' + name
}
console.log(createGreet('hello', 'izany'))

var arrowGreet = (message, name) => {
  return message + ' ' + name
}
console.log(arrowGreet('hello', 'zany'))

var arrowGreet2 = (message, name) => message + ' ' + name
console.log(arrowGreet2('hello', 'zany'))

var squared = x => x + x
console.log(squared)
