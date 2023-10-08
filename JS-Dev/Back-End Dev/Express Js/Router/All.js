// Node js - Express js
// Router used to manage routes and middlewares in app
const print = (data)=>console.log(data)
const express = require('express')
const port = 8080
const app = express()

// define route
const r1 = express.Router().all('/',function(req,res,next){
    // res.sendFile(__dirname+'/public/index.html')
    res.send('connected')
})

// apply route to app
app.use(r1)

app.listen(port,function(err){
    if(err) print("error: "+err)
})