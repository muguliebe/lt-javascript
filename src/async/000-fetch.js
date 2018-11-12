const axios = require('axios')

const url = `https://api.github.com/users?page=1&per_page=10`
axios.get(url)
     .then(res => res.data)
     .then(users => {
       users.forEach(user => console.log(`${user.id} : ${user.login}`))
     })
     .catch(err => console.error(`error occurred : ${err}`))

