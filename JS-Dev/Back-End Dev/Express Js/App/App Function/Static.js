// Node js - Express js - Static
// used for serving static files

const print = (params) => console.log(params)

const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
    print('connected')
    res.sendFile(index_path)
})

app.listen(8080)

// https://loclahost:8080/public/index.html