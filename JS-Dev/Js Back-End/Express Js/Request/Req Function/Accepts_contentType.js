// Node js - Express js
// accepts -  check if certain content type is accepted

const print = (data)=>console.log(data)
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/',function(req,res,next){
    // res.sendFile(__dirname+'/public/index.html')

    if(req.accepts('json')){
        res.json({'message':"hello world"})
    }else res.send('json not accepted')
})

const r2 = express.Router().get('/2',function(req,res,next){
    if(req.acceptsCharsets('utf-8')){
        res.send('charset utf-8 acceptable')
    }else res.send('not accepted utf-8')
})

// commen accept methode for all content type
const r3 = express.Router().get('/3',function(req,res,next){
    if(req.accepts('en')){
        res.send('en lang accepted')
    }else res.send('en not accepted')
})

app.use(r1)
app.use(r2)
app.use(r3)
app.listen(port,function(err){
    if(err) print("error: "+err)
})