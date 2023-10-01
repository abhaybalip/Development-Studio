// Node js - Express js - Locals

const print = (data) => console.log(data)
const index_html = 'C:\\Users\\abhay\\Documents\\code-book\\node_env\\index.html'

const express = require('express')
const nodemon = require('nodemon')

const app = express()

// locals property is used for storing data
app.locals.path = '/'
app.locals.mod = 'node_env'
app.locals.count = 0

app.get('/', function (req, res, next) {
    print(app.locals.mod)
    res.sendFile(index_html)
})

app.listen(8080, function (err) {
    if (err) print('error: ' + err)
})