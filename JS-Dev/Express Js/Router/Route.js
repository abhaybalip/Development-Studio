// Node js - Express js
// route methode allows to define route 

const print = (data) => console.log(data)
const express = require('express')
const port = 8080
const app = express()

const router = express.Router()
router.route('/home').get(function (req, res, next) {
    res.send('connected')
})

app.use(router)
app.listen(port, function (err) {
    if (err) print("error: " + err)
})