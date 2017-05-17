let map = new Map()

/*
set()
get()
size
clear()
has()
*/

map.set('foo', 'bar')
map.set('hello', 'world')

// map.clear()
console.log(map.has('foo')) // -> check 'key'

/* Iterators
keys()
entries()
values
*/

for (let key of map.keys()) {
  console.log(key)
}

for (let [key, value] of map.entries()) {
  console.log(key + ':' + value)
}
