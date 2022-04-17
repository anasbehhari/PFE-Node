const db = require('../config/database')
const Admin = require('../models/Admin')

let newAdmin = new Admin({
    name: 'zakarya',
    email: 'zakaria@gmail.com',
    password: 'zakarya123',
})

newAdmin.save( (err) => {
    if (!err) {
        console.log('Admin added')
    } else {
        console.log(err)
    }
})