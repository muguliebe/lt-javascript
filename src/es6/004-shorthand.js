let color = 'red'
let speed = 10
function go() {
  console.log('gogogo')
}

let car = {
  color,
  speed,
  go,
  go(){ console.log('gogogo') },
  ["anyName"]: function(){ console.log('gogogo') }
}
console.log(JSON.stringify(car, null, 2))
car.go()
car.anyName()
