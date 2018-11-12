/* eslint-disable */

// =============================================================================
var message = 'hi'
{
  var message = 'bye'
}
console.log(message)

// =============================================================================
let message2 = 'hi'
{
  let message2 = 'bye'
}

console.log(message2)

// =============================================================================
var fs = []
for(var i=0; i<2; i++){ // change to let
  fs.push(function(){
    console.log(i)
  })
}
fs.forEach(function(f) {
  f()
})

// =============================================================================
function varFunc(){
  var previous = 0
  var cureent = 0
  var i
  var temp
  for(i=0; i<10; i++){
    temp = previous
    previous = current
    current = temp + current
  }
}

function letFunc(){
  let previous = 0
  let cureent = 0

  for(let i=0; i<10; i++){
    let temp = previous
    previous = current
    current = temp + current
  }
}
