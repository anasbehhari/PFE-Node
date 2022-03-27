const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('pages/index')
})
router.get('/reservation', (req, res)=>{
    res.render('pages/reservation')
})
router.get('/doctors', (req, res)=>{
    res.render('pages/doctors')
})
router.get('/contact', (req, res)=>{
    res.render('pages/contact')
})
router.get('/login', (req, res)=>{
    res.render('pages/login')
})
router.get('/register', (req, res)=>{
    res.render('pages/register')
})
router.get('/account', (req, res)=>{
    res.render('pages/doctor/account')
})
router.get('/request', (req, res)=>{
    res.render('pages/doctor/request')
})


module.exports = router