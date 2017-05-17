// =============================================================================
// import {sumTwo, sumThree} from './modules/math'
// console.log(`2+3   ${sumTwo(2, 3)}`)
// console.log(`2+3+4 ${sumThree(2, 3, 4)}`)

// =============================================================================
// import {sumTwo as add, sumThree} from './modules/math'
// console.log(`2+3   ${add(2, 3)}`)
// console.log(`2+3+4 ${sumThree(2, 3, 4)}`)

// =============================================================================
// import * as addition from './modules/math'
// console.log(`2+3   ${addition.sumTwo(2, 3)}`)
// console.log(`2+3+4 ${addition.sumThree(2, 3, 4)}`)

// =============================================================================
import {users} from '../data/users'
import * as _ from 'lodash'

console.log(users)
console.log(_.filter(users, {age: 36}))

// =============================================================================
users.filter(users => users.age === 36).forEach(user => console.log(user))
