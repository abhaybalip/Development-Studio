// Node js - HTTP

const print = (data)=>console.log(data)

const http = require('http')

// create server
const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'application/json'})
    res.end(JSON.stringify({
        data: 'hello world'
    }))
})


// listening server => http://localhost:8080/
server.listen(8080,function(err){
    if(err) print('error: '+err)
})