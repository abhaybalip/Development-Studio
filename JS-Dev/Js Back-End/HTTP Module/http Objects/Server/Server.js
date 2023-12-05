// Node js - HTTP

const print = (data) => console.log(data)

const { isUtf8 } = require('buffer')
const http = require('http')

// create server
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({
        data: 'hello world'
    }))
})

server.listen(8080, function (err) {
    if (err) print('error: ' + err)
})
// listening server => http://localhost:8080/