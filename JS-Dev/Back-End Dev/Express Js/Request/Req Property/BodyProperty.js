// Node js - Express js
// url encoded methode parses sent data
// body stores data in key value pair

const print = (data) => console.log(data)
const express = require('express')

const app = express()

app.use(express.urlencoded())

app.get('/', function (req, res, next) {
    print('body: ' + req.body)
    res.send('connected')
})

app.listen(8080, function (err) {
    if (err) print('error: ' + err)
})