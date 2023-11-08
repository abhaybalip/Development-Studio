// Node js - http2

const print = (data) => console.log(data)
const index_path = __dirname + '\\public\\index.html'

// Library
const http2 = require('http2')
const http = require('http')
const fs = require('fs')
const { pid } = require('process')

const url = 'https://dns.google.com'

const client = http2.connect(url)

const req = client.request({
    'method': 'GET',
    'path': '/'
})

req.on('response',function(header,flags){
    print('flags: '+flags)
    print('header: '+header[':status'])
    print(header['content-type'])
})

// http2 is binary 
req.setEncoding('ascii')
// print(req.readableEncoding())
print('req data: '+req.read(10))

req.close()
client.close()