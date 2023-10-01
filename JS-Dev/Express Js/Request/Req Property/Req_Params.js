// Node js - Express js
// parameters are acceessible to param object sent via path name

const print = (data) => console.log(data)
const express = require('express')
const { addListener } = require('nodemon')
const port = 8080

const app = express()

app.use('/user/:name', function (req, res, next) {
    res.send('Helo ' + req.params.name)
})

app.listen(port, function (err) {
    if (err) print('error: ' + err)
})