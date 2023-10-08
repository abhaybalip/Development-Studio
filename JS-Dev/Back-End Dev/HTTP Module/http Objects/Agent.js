// Node js - http 
// Agent are used to maintain http connection

const print = (data) => console.log(data)
const port = 8080
const http = require('http')

const agent = new http.Agent()

http.request({
    agent: agent,
    host: 'www.youtube.com',
    path: '/',
    method: 'GET'
}, function (res) {
    print(res.statusMessage)
    print(res.statusCode)
    res.on('data', (chunk) => {
        print(chunk.toString())
    })
})