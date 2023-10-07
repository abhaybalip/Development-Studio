// // Node js - HTTP

const print = (data)=>console.log(data)

const http = require('http')

let option = {
    host: 'www.geeksforgeeks.com',
    path: '/',
    methode: 'GET'
}

http.request(option,function(res){
    print('status: '+res.statusCode)
    print('header: '+res.headers)
    print('max Listeners: '+res.getMaxListeners())
}).end(function(){
    print('connection ended')
})