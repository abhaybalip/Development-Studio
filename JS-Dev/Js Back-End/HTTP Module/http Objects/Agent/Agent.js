const print = (data) => console.log(data)

// Node js - http
const http = require('http')

const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 1,
})

const option = {
    URL: 'https://reqres.in/api/users/2',
    agent: agent,
    method: 'GET',
}

var req = http.request('http://www.google.com', (res) => {
    // Handle the response
    // res.on('data', (chunk) => {
    //     print(chunk)
    // })
    print('connected')
})

req.end()