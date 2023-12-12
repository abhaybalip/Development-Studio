const print = (data) => console.log(data)

// Node js - TLS/SSL
const tls = require('tls'),
    fs = require('fs'),
    http = require('http')

const option = {
    host: 'www.google.com',
    port: 443,
    rejectUnauthorized: false,
}

const socket = tls.connect(option,function(){
print('socket info: ')
    print(socket.address())
    print('remote address: '+socket.remoteAddress)
    print('remote family: '+socket.remoteFamily)
    print('remote port: '+socket.remotePort)

    print('is authorised : '+socket.authorized)
    print('is encrypted : '+socket.encrypted)

    print('cipher info : ')
    print(socket.getCipher())
})

socket.end(function(){
    print('socket connection closed')
})