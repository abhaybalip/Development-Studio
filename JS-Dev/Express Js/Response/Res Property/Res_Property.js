// Node js - Express js

const print = (data) => console.log(data)
const express = require('express')
const port = 1000
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')
    print('App data: ' + res.app)
    print('header: ' + res.header)

    res.send('connected')
})

app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})