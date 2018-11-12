let orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

// normal way
let totalAmount = 0
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}
console.log('totalAmount=', totalAmount, '\n')

// map
let totalAmount2 = 0
totalAmount2 = orders.reduce((sum, order) => {
  console.log(`sum: ${sum}, order: ${order.amount}`)
  return sum += order.amount
}, 0)
console.log('totalAmount2=', totalAmount2)

totalAmount2 = orders.reduce((sum, order) => sum + order.amount, 0)
console.log('totalAmount2=', totalAmount2)

