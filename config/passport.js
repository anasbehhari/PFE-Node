// const LocalStrategy = require("passport-local").Strategy;

// //USER MODEL
// const Admin = require("../models/Admin");

// module.exports = function (passport) {
//     passport.use('admin', new LocalStrategy({
//         // Fields to accept
//         usernameField: 'email', // default is username, override to accept email
//         passwordField: 'password',
//         passReqToCallback: true // allows us to access req in the call back
//       }, async (req, email, password, done) => {
//         // Check if user and password is valid
//         let user = await User.findBy('email', email)
//         let passwordValid = user && bcrypt.compareSync(password, user.passwordHash)
    
//         // If password valid call done and serialize user.id to req.user property
//         if (passwordValid) {
//           return done(null, {
//             id: user.id
//           })
//         }
//         // If invalid call done with false and flash message
//         return done(null, false, {
//           message: 'Invalid email and/or password'
//         });
//     }))
// }