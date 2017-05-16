// =============================================================================
var length = 16                                 // Number
var lastName = 'Johnson'                        // String
var x = {firstName: 'John', lastName: 'Doe'}    // Object

console.log('length:', length)
console.log('lastName: ', lastName)
console.log('x:', x)

var y = 16 + ' val'
console.log(`y: ${y}`)

var z
console.log(`z: ${z}`)

var arr = ['a', 'b', 'c']
console.log(`arr: ${arr}`)

// =============================================================================
console.log(`\ntypeof..`)
console.log(`typeof length   : ${typeof length}`)
console.log(`typeof lastName : ${typeof lastName}`)
console.log(`typeof x        : ${typeof x}`)
console.log(`typeof y        : ${typeof y}`)
console.log(`typeof z        : ${typeof z}`)
console.log(`typeof arr      : ${typeof arr}`)

// =============================================================================
/* eslint-disable */
console.log(`typeof undefined          : ${typeof undefined}`)
console.log(`typeof null               : ${typeof null     }`)
console.log(`typeof null === undefined : ${typeof null === undefined}`)
console.log(`typeof null == undefined  : ${typeof null == undefined}`)
/* eslint-enable */
