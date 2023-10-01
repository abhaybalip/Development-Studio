// Node js - Express js - Json Data
// json methode used to send data in json format

const print = (params)=> console.log(params)
const express = require('express')

const app = express()

// middleware function - json()
app.use(express.json())

// post methode used to send data to server
app.post('/', function (req, res) {
    console.log(req.body.name)
    // res.end();
})

app.listen(8080)