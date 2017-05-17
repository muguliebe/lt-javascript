const http = require('http')

http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200)
  res.end(JSON.stringify({result: 'hellow'}))
}).listen(9999)
