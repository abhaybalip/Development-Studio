// Node js - Express js
// Attchment methode sets headers field content-disposition to 'attachment'
// it tells to download the file/s in this way

const print = (data) => console.log(data)
const express = require('express')
const port = 8080
const app = express()

const r1 = express.Router().get('/', function (req, res, next) {
    // res.sendFile(__dirname+'/public/index.html')

    // file to send
    res.attachment(__dirname + '/public/image.ico')
    res.send('connected')
})

app.use(r1)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})