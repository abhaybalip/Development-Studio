// Node js - Express js
// delete function used for generating delete req

const print = (data) => console.log(data)
const express = require('express')

const app = express()

app.delete('/', function (req, res, next) {
    res.send('delete request called')
})

app.listen(8080, function (err) {
    print('error: ' + err)
})