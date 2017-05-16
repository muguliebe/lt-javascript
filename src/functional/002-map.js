console.log('start')

const animals = [
  { name: 'zany', species: 'rabbit' },
  { name: 'mike', species: 'dog' },
  { name: 'susan', species: 'dog' },
  { name: 'kwon', species: 'fish' },
  { name: 'chun', species: 'cat' },
  { name: 'wang', species: 'fish' }
]

// normal
const names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}
console.log(names)

// map
const names2 = animals.map(function(animal) {
  return animal.name
})
console.log(names2)

// map with arrow
const names3 = animals.map(x => x.name)
console.log(names3)

// split map function
const withdrawName = animal => animal.name
const names4 = animals.map(withdrawName)
console.log(names4)
