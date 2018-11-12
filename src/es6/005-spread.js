let first = [1, 2, 3]
let second = [4, 5, 6]

// first.push(second)
first.push(...second)

console.log(first)

// =============================================================================
function addThreeThings(a, b, c) {
  let result = a + b + c
  console.log(result)
}

addThreeThings(...first)

// =============================================================================
function what({value, ...rest}){
  console.log('value=', value)
  console.log('rest=', rest)
}

const obj = {a: 'a', b:'b', value:'my'}
what(obj)
