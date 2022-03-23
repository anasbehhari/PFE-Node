const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('this is event page')
})

module.exports = router