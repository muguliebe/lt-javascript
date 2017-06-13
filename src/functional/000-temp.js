import fetch from 'node-fetch'

const setfetch = (defaultOptions) => {
  return (options) => {
    return fetch(options.url, Object.assign({}, options, defaultOptions))
          .then(res => res.json())
  }
}

const ffetch = setfetch({
  crendentials: 'include'
})

ffetch({
  url: 'https://api.github.com/users'
}).then(users => {
  return users[0]
}).then(user => {
  console.log(user)
}).catch(err => logger.error(`error occured : ${err}`))
