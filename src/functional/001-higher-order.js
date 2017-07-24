/* eslint-disable no-unused-vars */
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
const dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i])
  }
}
console.log(dogs)

// high-order
const dogs2 = animals.filter(animal => animal.species === 'dog')
console.log(dogs2)

// split filter function
const isDog2 = function(animal) {
  return animal.species === 'dog'
}
const isDog = animal => animal.species === 'dog'
const dogs3 = animals.filter(isDog)
console.log(dogs3)
