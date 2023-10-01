// Node js - Express js
// cookie parser methode parses sent data
// req object cookie stores data

const print = (data)=> console.log(data)
const express = require('express')

const app = express()

app.get('/',function(req,res,next){
    print('cookies: '+req.cookies)
    res.send('connected')
})

app.listen(8080,function(err){
    if(err) print('error: '+err)
})