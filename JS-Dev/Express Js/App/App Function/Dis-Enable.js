// Node js - Express js
// disable and enable methode set the setting to false or true

const print = (data) => console.log(data)
const express = require('express')

const app = express()

app.disable('user')
print(app.get('user'))

app.enable('user')
print(app.get('user'))

// app.listen(8080,function(err){
//     print('error: '+err)
// })