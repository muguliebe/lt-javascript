var person = {
  fname: 'John',
  lname: 'Doe',
  age: 25
}

console.log('first way')
for (var variable in person) {
  console.log(variable + ' is ' + person[variable])
}

console.log('\nsecond way')
Object.keys(person).forEach(key => {
  console.log(key + ' is ' + person[key])
})

