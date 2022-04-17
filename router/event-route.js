const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const Doctor = require('../models/Doctor')

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
router.post('/register', (req, res)=>{
    const {body} = req
    const {name, email, phone, specialites, password} = body
    const newDoctor = new Doctor({
        name, email, phone, specialites, password
    }) 
    newDoctor.save()
    .then(result => {
        if(result != null){
            res.redirect('/login')
        }
        else{
            res.redirect('/register')
        }
    })
    .catch(err =>{
        res.redirect('/register')
    })
})

router.get('/account', (req, res)=>{
    res.render('pages/doctor/account')
})
router.get('/request', (req, res)=>{
    res.render('pages/doctor/request')
})
router.get('/user-account', (req, res)=>{
    res.render('pages/users/account')
})
router.get('/rdv', (req, res)=>{
    res.render('pages/users/rdv')
})


module.exports = router