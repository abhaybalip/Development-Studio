const print = (data) => console.log(data)

// Node js - ssl
// ssl server activity
const tls = require('tls')
const fs = require('fs')
const { Server } = require('http')

const host = 'localhost', port = 8080
const option = {
    cert: fs.readFileSync(__dirname + '/public/public-cert.pem'),
    key: fs.readFileSync(__dirname + '/public/public-key.pem'),
    value: null,
}
var server = tls.createServer(option, function (socket) {
    socket.on('data', function (data) {
        print('data: ' + data)
    })
})

server.listen(port, host, function () {
    print('listening')
    print('root cert: \n')
})

server.close(function (err) {
    if (err) print('error:: ' + err)
    else print('closed server')
})