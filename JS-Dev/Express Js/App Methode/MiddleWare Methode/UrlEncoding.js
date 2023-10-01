// Node js - Express js - url encoding

const print = (params) => console.log(params)
const index_path = 'C:\\Users\\abhay\\Documents\\code-book\\Node_Env\\index.html'

const express = require('express')

const app = express()

app.use(express.urlencoded({extended: false}))

app.post('/',(req,res,next)=>{
    print('Hi')
    print(req.method)
    // res.end()
})

app.get('/',(req,res,next)=>{
    res.sendFile(index_path)
})

app.listen(8080,(err)=>{
    if(err) print('error: '+err)
})