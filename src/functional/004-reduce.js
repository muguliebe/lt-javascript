const fs = require('fs')

const output = fs.readFileSync('../data/data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.replace('\r', ''))
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log(JSON.stringify(output, null, 2))
