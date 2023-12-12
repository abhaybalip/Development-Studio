const print = (data) => console.log(data)

const { hostname } = require('os')
// Node js - TLS/SSL

const tls = require('tls'),
    fs = require('fs')

const server = tls.createServer(function (socket) {
    try {
        fs.readFile(__dirname + '/public/index.html', { encoding: 'ascii' }, function (err, data) {
            if (err) print('error in opening file : ' + err)
            else {
                socket.write(data.toString())
            }
        })
    } catch (error) {
        print('error occured : '+error)
        socket.write('error occures')
    }
})

server.listen(1000,'localhost')