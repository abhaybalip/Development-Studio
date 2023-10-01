// Node js - Express js
// end methode to end response

const print = (data) => console.log(data)
const { json } = require('body-parser')
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')
    res.send('connected')

    res.end(function () {
        print('response ended')
    })
})

const r2 = express.Router().get('/2', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')
    res.send('connected')
    res.end(JSON.stringify({
        'key': 'value'
    }))
})
app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})