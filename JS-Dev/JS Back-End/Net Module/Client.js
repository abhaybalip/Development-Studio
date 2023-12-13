const print = (data) => console.log(data)

const { Socket } = require('dgram')
// Node js - net module
const tls = require('tls'),
    net = require('net'),
    http = require('http'),
    fs = require('fs')

const option = {}
const host = '', port = 0,
    ip = '192.168.0.1'

// create client connection
const client = net.connect({
    host: 'google.com',
    port: 80,
    autoSelectFamily:  true,
},function(){
    print('client is connected')
    print(client.address())
})

// end client connection
client.end(function(){
    print('client connection ended')
})