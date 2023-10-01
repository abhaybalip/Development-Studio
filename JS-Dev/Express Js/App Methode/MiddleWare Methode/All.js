// Node js - Express js

const print = (data)=> console.log(data)
const express = require('express')

const app = express()

app.all('/',function(req,res,next){
    res.send('connected succesfully')
})

app.listen(8080,function(err){
    if(err) print('error: '+err)
})