function f1(x, y) {
  console.log(arguments)
  return x + y
}

f1()
f1('a')
f1('a', 'b')

var x = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function sumAll() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(x)
