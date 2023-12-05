// Node js - Express js
// parameters are acceessible to param object sent via path name

const print = (data) => console.log(data)
const express = require('express')
const { addListener } = require('nodemon')
const port = 8080

const app = express()

app.use('/user/:name', function (req, res, next) {
    res.send('Hello ' + req.params.name)
})

app.use('/user/:name/:surname', function (req, res, next) {
    res.send('Hello ' + req.params.name+ ' '+ req.params.surname)
})



app.listen(port, function (err) {
    if (err) print('error: ' + err)
})

// localhost:8080/user: