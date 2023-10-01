// Node js - Express js

const print = (data)=> console.log(data)
const express = require('express')

// const index_path = 'C:\\Users\\abhay\\Documents\\code-book\\node_env\\public\\index.html'
// const index = './public/index.html'
const app =  express()

app.delete('/',function(req,res,next){
    res.send('delete request called')
})

app.listen(8080,function(err){
    print('error: '+err)
})