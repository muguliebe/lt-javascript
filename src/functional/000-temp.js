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

import _ from 'lodash'

// console.log('gogo')

// const animals = [
//   { name: 'zany', species: 'rabbit' },
//   { name: 'mike', species: 'dog' },
//   { name: 'susan', species: 'dog' },
//   { name: 'kwon', species: 'fish' },
//   { name: 'chun', species: 'cat' },
//   { name: 'wang', species: 'fish' }
// ]

// const result = animals.map(animal => animal.name).join('')
// console.log(result)

const editors = [
    { id: '2', template: '<html><body></body></html>', mode: 'html'},
    { id: '1', template: `console.log('a')`, mode: 'javascript'},
    { id: '4', template: `console.log('b')`, mode: 'javascript'},
    { id: '5', template: `console.log('c')`, mode: 'javascript'},
    { id: '3', template: 'h1 { font-size: 15px }', mode: 'css'}
]

const ids = ['1', '2', '3', '4', '5']
const result2 = editors.filter(editor => _.includes(ids, editor.id))
    .map(editor => editor)

let htmlTemplate = result2.filter(editor => editor.mode === 'html')
                            .map(editor => editor.template)
                            .join('')

let javascriptTemplate = result2.filter(editor => editor.mode === 'javascript')
                            .map(editor => '<script>' + editor.template + '</script>')
                            .join('')

let cssTemplate = result2.filter(editor => editor.mode === 'css')
                        .map(editor => '<style>' + editor.template + '</style>')
                        .join('')

let indexHead = htmlTemplate.indexOf('</head>')
let indexBody = htmlTemplate.indexOf('</body>')
let htmlIng = htmlTemplate.substring(0, indexHead)

if (htmlIng.length > 0) {
    let htmlSplited = htmlTemplate.split('</head>')
    htmlIng += cssTemplate + javascriptTemplate + htmlSplited[htmlSplited.length-1]
} else {
    htmlIng = cssTemplate + javascriptTemplate + htmlTemplate
}


const finalTemplate = htmlIng
console.log('final:', finalTemplate)
