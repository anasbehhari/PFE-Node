const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('pages/index')
})

module.exports = router