// Node js - Express js

const print = (data)=> console.log(data)
const express = require('express')

const app =  express()

app.get('/',function(req,res,next){
    // req app
    print('req app: \n'+req.app)

    // base url
    print(req.baseUrl)
  
    res.send('connected')
})

app.listen(8080,function(err){
    print('error: '+err)
})