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
    socket.readable ? print('readable connection') : print('not readable connection')
    socket.writable ? print('writable connection') : print('not writable connection')

    print('session : '+socket.getSession())
    print('certificate: '+[...socket.getCertificate()])
    print('protocol: '+socket.getProtocol())
})

socket.end(function(){
    print('socket connection closed')
})