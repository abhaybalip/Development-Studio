// Node js - Express js
// fresh property indicates if response is still fresh

const print = (data)=> console.log(data)
const express = require('express')

const app = express()

app.get('/',function(req,res,next){
    if(req.fresh){
        res.send('this is fresh page')
    }
})

app.listen(8080,function(err){
    if(err) print('error: '+err)
})