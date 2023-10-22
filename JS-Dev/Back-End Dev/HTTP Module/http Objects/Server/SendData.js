const print = (data) => console.log(data)

// Node js - http
const http = require('http')
const fs = require('fs')

const file_path = __dirname + '/public/index.html'

// create server
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile(file_path, { encoding: 'utf-8' }, function (err, data) {
        if (err) {
            print('error: ' + err)
            res.end('failed to load')
        } else {
            res.end(data)
        }
    })
})

// listen request
server.listen(1000, function (err) {
    if (err) print('error: ' + err)
})