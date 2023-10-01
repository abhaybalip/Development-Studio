// Node js - Express js - Text
// used for file transfering

const print = (params) => console.log(params)
const index_path = 'C:\\Users\\abhay\\Documents\\code-book\\Node_Env\\index.html'

const express = require('express')

const app = express()

// middleware function parses data into text
app.use(express.text());
 
app.post('/', function (req, res) {
    res.send(req.body);
    res.end();
})

app.listen(8080)