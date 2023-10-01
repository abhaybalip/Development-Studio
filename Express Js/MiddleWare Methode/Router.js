// Node js - Express js - Router
// handle routes for app

const print = (params) => console.log(params)

const express = require('express')

const app = express()
const router = router1 = express.Router()

router.get('/',(req,res,next)=>{
    print('router : '+req.url)
    res.send('connection succesful')
    // res.end()
})

router1.get('/about',(req,res,next)=>{
    print('router : '+req.url)
    res.send('connection succesful')
})

app.use(router)
app.use(router1)

app.listen(8080)