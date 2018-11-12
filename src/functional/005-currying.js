let currying = (type, value, etc) =>
  'my ' + type + ' is ' + value + ' and.. ' + etc

console.log(currying('name', 'zany', 'where am i..'))

let currying2 = type => value => etc =>
  'my ' + type + ' is ' + value + ' and.. ' + etc

console.log(currying2('name')('zany')('where am i...?'))

let ageType = currying2('age')
let soon = ageType('34')
let result = soon('whatever')
console.log(result)
