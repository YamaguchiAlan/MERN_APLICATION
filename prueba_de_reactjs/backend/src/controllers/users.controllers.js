const usersCtrl = {}
const passport = require('passport');

const Users = require('../models/Users');

usersCtrl.signup = async (req, res) => {
    const {username, email, password} = req.body;
    const newUser = await new Users({
        username,
        email,
        password
    })
    newUser.password = await newUser.encryptPassword(password);
    try{
        await newUser.save()
        res.status(201).send('User Created')
    }
    catch (err) {
        if(err.message.includes("duplicate key error collection")){
            err.keyValue.username ?
            res.status(400).send({ errors: {username:{type:"error", name:"Database Error", message: 'Nombre de usuario no disponible'}} })
            : res.status(400).send({ errors: {email:{type:"error", name:"Database Error", message: 'Este email ya esta en uso'}} })
        } 
        else{
            res.status(400).send(err) 
        }
    }
};

usersCtrl.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.status(400).send({ error: { message: 'Nombre de usuario o contraseña incorrecta'} }); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({ success: { message: 'Has iniciado sesión'} });
      });
    })(req, res, next);
  }

module.exports = usersCtrl;