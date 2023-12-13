const print = (data) => console.log(data)

// Node js - net module
const tls = require('tls'),
    net = require('net'),
    http = require('http'),
    fs = require('fs')

const option = {}
const host = '', port = 0,
    ip = '192.168.0.1'

// create server
const server = net.createServer(function(socket){
    print('socket info: ')
    print(socket.address())
    print('remote socket info: ')
    print(socket.remoteAddress)
    print(socket.remoteFamily)
    print(socket.remotePort)
})

// listen server
server.listen(8080,'localhost',function(){
    print('server is listening')
})

// // close server
// server.close(function(err){
//     if(err) print('error: '+err)
// })