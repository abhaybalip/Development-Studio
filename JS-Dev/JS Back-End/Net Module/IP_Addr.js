const print = (data) => console.log(data)

// Node js - net module
const tls = require('tls'),
    net = require('net'),
    http = require('http'),
    fs = require('fs')

const option = {}
const host = '', port = 0,
    ip = '192.168.0.1'

// manage ip address identity
print(net.isIP(ip))
print(net.isIPv4(ip))
print(net.isIPv6(ip))