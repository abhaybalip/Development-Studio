// Node js - Express js

const print = (data)=>console.log(data)

const express = require('express')

const app = express()

app.use('/',function(req,res,next){
    const {data} = req.query
    print('data: '+data)

    res.json(data)
})

app.listen(8080,function(err){
    if(err) print('error: '+err)
})

// http://localhost:8080?data=100