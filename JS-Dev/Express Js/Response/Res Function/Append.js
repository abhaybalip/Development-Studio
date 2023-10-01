// Node js - Express js
// Append methode is to add header data

const print = (data) => console.log(data)
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')

    res.append('field', 'value')
    res.send('connected')
})

app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})