// Node js - Express js
// set cookie methode is usedd to set cookie in client browser
// clear cookie methode clear a cookie in client browser

const print = (data) => console.log(data)
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')

    res.cookie('cookie-name', 'cookie-value')
    res.clearCookie('cookie-name')

    res.send('connected')
})

app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})