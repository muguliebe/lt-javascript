{
  const addition = require('./modules/math')
  console.log(`2+3   ${addition.sumTwo(2, 3)}`)
  console.log(`2+3+4 ${addition.sumThree(2, 3, 4)}`)
}

{
  const {sumTwo, sumThree} = require('./modules/math')
  console.log(`2+3   ${sumTwo(2, 3)}`)
  console.log(`2+3+4 ${sumThree(2, 3, 4)}`)
}

{
  const users = require('../data/users')
  const _ = require('lodash')

  console.log(users)
  console.log(_.filter(users, {age: 36}))
}

{
  const users = require('../data/users')
  users.filter(users => users.age === 36).forEach(user => console.log(user))
}
