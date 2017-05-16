let people = [
  {
    firstName: 'aaaaa',
    lastName: 'mamoth',
    phone: '01012341234',
    email: 'aa@mugu.com',
    address: 'home'
  },
  {
    firstName: 'bbbbb',
    lastName: 'Girin',
    phone: '001123456',
    email: 'bb@mugu.com',
    address: 'home2'
  },
  {
    firstName: 'ccccc',
    lastName: 'Kkang',
    phone: '0114567890',
    email: 'cc@mugu.com',
    address: 'home3'
  },
  {
    firstName: 'ddddd',
    lastName: 'Tong',
    phone: '0111231234',
    email: 'dd@mugu.com',
    address: 'home4'
  }
]

people.forEach(({firstName}) => console.log(firstName))

var [, SecondMan] = people
function logEmail({email}) {
  console.log(email)
}

logEmail(SecondMan)
