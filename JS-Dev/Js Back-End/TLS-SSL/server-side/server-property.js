const print = (data)=>console.log(data)

// Node js - ssl
// server properties
const tls = require('tls'),
fs = require('fs'),
port = 8080,
host = 'localhost',

option = {
    cert: fs.readFileSync(__dirname+'/public/public-cert.pem'),
    key: fs.readFileSync(__dirname+'/public/public-key.pem'),
    rejectUnauthorized: false,
},

server = tls.createServer(option,function(socket){
    socket.on('data',function(data){
        print('data: '+data)
    })
}).listen(port,host,function(){
    print('server is listening')

    // root certificate - used to verify authority of other cert
    // returns array of root certificate
    print('root cert: \n'+tls.rootCertificates)

    // cipher - algorithms used for encryption
    // 
    print('cipher : \n'+tls.getCiphers())

    // cert authorization
    // if(client.authorised) print('authorised')
})