// Node js - Express js - Json Data

const print = (params)=> console.log(params)
const express = require('express')

const app = express()

// middleware function - json()
app.use(express.raw())

// post methode used to send data to server
app.post('/', function (req, res) {
    console.log(req.body.name)
    // res.end();
})

app.listen(8080)