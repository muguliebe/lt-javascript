/* eslint-disable */

// First
function Orange() {
  this.type = 'orange'
  this.color = 'yello'
  this.getInfo = function () {
    console.log(`${this.type} is ${this.color}`)
  }
}

var orange1 = new Orange()
console.log(orange1)
orange1.getInfo()

var orange2 = new Orange()
console.log(orange2)

// Second
var Kiwi = {
  type: 'kiwi',
  color: 'yello',
  getInfo: function () {
    console.log(`${this.type} is ${this.color}`)
  }
}
console.log(Kiwi)
// var kiwi = new Kiwi() // this is error

// Third
var Apple = new function () {
  this.type = 'apple'
  this.color = 'red'
  this.getInfo = function () {
    console.log(`${this.type} is ${this.color}`)
  }
}
Apple.getInfo()
// var apple1 = new Apple() // this is err
