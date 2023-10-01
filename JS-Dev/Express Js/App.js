// Node js - Express js - Application

const print = (params)=> console.log(params)
const express = require('express')

// define express app
const app = express()

// define path in app
// Arguments: request path / callback: incoming request outgoing response
app.get('/',(req,res,next)=>{
    // send text response
    res.send('connected to server')
})

app.get('/data',(req,res,next)=>{
    // send json response
    res.json({page:'data-page',host: 'localhost',port:8080})
})

// listen request at port 8080
app.listen(8080,'localhost')