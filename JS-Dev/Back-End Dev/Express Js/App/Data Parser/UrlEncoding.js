// Node js - Express js - url encoding
// access to req.body property
const print = (params) => console.log(params)

const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res, next) => {
    print('Hi')
    print(req.method)
    // res.end()
})

app.get('/', (req, res, next) => {
    res.send('connected')
})

app.listen(8080, (err) => {
    if (err) print('error: ' + err)
})