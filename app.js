const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()
const db = require('./config/database')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('node_modules'))

// app.get('/', (req, res)=>{
//     res.send("done!!")
// })

const events = require('./router/event-route')
app.use('/',events)
app.use('/reservation',events)
app.use('/doctors',events)
app.use('/contact',events)
app.use('/login',events)
app.use('/register',events)
app.use('/account',events)
app.use('/request',events)
app.use('/user-account',events)

app.listen(3000,()=>{
    console.log("app is working");
})