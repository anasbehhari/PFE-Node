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

app.listen(3000,()=>{
    console.log("app is working");
})