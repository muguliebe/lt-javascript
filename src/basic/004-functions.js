/* eslint-disable */
function myfunction(x, y) {
  return x + y
}

var result = myfunction(1, 2)
console.log(`result: ${result}`)

var result2 = myfunction(1, 2, 3)
console.log(`result: ${result2}`)

var x = function(a, b) {
  return a + b
}

console.log(`x:`, x(3, 3))

var x2 = function func(x, y) {
  return x + y
}

console.log(`x2: ${x2(3, 3)}`)
;

(function selfInvoke() {
  console.log(`self invoked`)
})()
