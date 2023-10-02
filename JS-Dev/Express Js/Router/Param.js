// Node js - Express js
// Routing to specified parameter

const print = (data)=>console.log(data)
const express = require('express')
const port = 8080
const app = express()

const router = express.Router()

// router.get('/',function(req,res,next){
//     res.send('connected via get methode')
// })

// router.post('/',function(req,res,next){
//     res.send('connected via post methode')
// })

const r = express.Router()
r.param('me',function(req,res,next){
    print('router param methode')
})
r.get('/user:me',function(req,res,next){
    print('router get methode')
})

app.use(r)

app.listen(port,function(err){
    if(err) print("error: "+err)
})