const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()

app.get('/', (req, res)=>{
    res.send("done!!")
})

const events = require('./router/event-route')
app.use('/events',events)

app.listen(3000,()=>{
    console.log("app is working");
})