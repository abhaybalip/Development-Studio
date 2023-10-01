// Node js - Express js - Static
// used for file transfering

const print = (params) => console.log(params)
const index_path = 'C:\\Users\\abhay\\Documents\\code-book\\Node_Env\\index.html'

const express = require('express')

const app = express()

app.use('/',express.static('C:\\Users\\abhay\\Documents\\code-book\\data.txt'))

app.get('/',(req,res,next)=>{
    print('connected')
    res.sendFile(index_path)
})

app.listen(8080)