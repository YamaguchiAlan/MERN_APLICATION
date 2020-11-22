const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const Users = require('../models/Users');

passport.use(new LocalStrategy(
    function (username, password, done) {
        Users.findOne({username}, (err, user) => {
            if (err) { return done(err) }
            if (!user) {
                return done(null, false, {message: 'Usuario incorrecto'})
            }
            if (!user.matchPassword(password)) {
                return done(null, false, { message: 'Contraseña incorrecta'})
            }
            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
        done(err, user);
    })
});