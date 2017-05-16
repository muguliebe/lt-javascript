var person = {
  fname: 'John',
  lname: 'Doe',
  age: 25
}

for (var variable in person) {
  console.log(variable + ' is ' + person[variable])
}
