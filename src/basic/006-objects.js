/* eslint-disable */
// literal object
var person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}

console.log(person1)

//
var person2 = new Object()
person2.firstName = 'John'
person2.lastName = 'Doe'
person2.age = 50
person2.eyeColor = 'blue'
console.log(person2)

//
function Person3(first, last, age, eye) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}
var myFather = new Person3('John', 'Doe', 50, 'blue')
var myMother = new Person3('Sally', 'Rally', 48, 'green')

// javasciprt object is mutable
var otherMother = myMother
otherMother.age = 30
console.log(otherMother)
console.log(myMother)

// Built-in JavaScript Contructors
var x1 = new Object()
var x2 = new String()
var x3 = new Number()
var x4 = new Boolean()
var x5 = new Array()
var x6 = new RegExp()
var x7 = new Function()
var x8 = new Date()

// primitive data types
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object
