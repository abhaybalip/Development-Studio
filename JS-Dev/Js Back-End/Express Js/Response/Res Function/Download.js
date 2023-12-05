// Node js - Express js
// download methode used to download file in client side
// header content-disposition as attachment with promt

const print = (data) => console.log(data)
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')

    res.download(__dirname + '/public/image.ico')
    res.send('connected')
})

app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})