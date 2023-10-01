// Node js - Express js
// different handlers methode for serving

const print = (data)=> console.log(data)
const express = require('express')

const app = express()

app.all('/all',function(req,res,next){
    res.send('all page')
})

app.get('/get',function(req,res,next){
    res.send('get page')
})

app.post('/post',function(req,res,next){
    res.send('post page')
})

app.put('/put',function(req,res,next){
    res.send('put page')
})


// listen via server
app.listen(8080,function(err){
    if(err) print('error: '+err)
})