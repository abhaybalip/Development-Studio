// Node js - http2

const print = (data) => console.log(data)
const index_path = __dirname + '\\public\\index.html'

// Library
const http2 = require('http2')
const fs = require('fs')

// create server with certificate and security key
const server = http2.createSecureServer({
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key'),
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, world!')
})

server.listen(8080)