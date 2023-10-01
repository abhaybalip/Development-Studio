// Node js - Express js - Mount App

const print = (data) => console.log(data)

const express = require('express')

const app = express()
const about = express()

about.get('/',function(req,res,next){
    res.send('about page')
})

app.use('/about',about)

app.get('/',function(req,res,next){
    res.send('home page')
})

app.listen(8080,function(err){
    if(err) print('error: '+err)
})