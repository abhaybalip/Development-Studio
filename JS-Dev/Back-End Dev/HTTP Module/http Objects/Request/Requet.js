// Node js - http

const print = (data) => console.log(data)

const http = require('http')
const option = {
    host: 'www.google.com',
    path: '/',
    method: 'GET',
    // protocol: 'https',
}
const req = http.request(option, function (res) {
    print('response info: ')
    print(res.statusCode)
})

print('request info: ')
print(req.headersSent)
print(req.host)
print('protocol: ' + req.protocol)
print('chunked encoding: ' + req.chunkedEncoding)

req.end(function () {
    print('request closed')
})