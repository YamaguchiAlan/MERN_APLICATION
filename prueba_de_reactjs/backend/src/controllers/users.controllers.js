const usersCtrl = {}
const passport = require('passport');

const Users = require('../models/Users');
const Activity = require('../models/Activity')

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
        res.status(201).send({
            success: "User Created",
            id: newUser.id
    })
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

usersCtrl.authenticate = async (req, res) => {
    const user = await Users.findById(req.session.passport.user, {password: 0, image: 0})
    console.log(user)
    res.send(user)
}

usersCtrl.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id, {password: 0, image: 0})
    res.send(user)
}

usersCtrl.uploadImage = async (req, res) => {
    try{
        const user = await Users.findById(req.params.id)
        user.image = req.file.buffer
        await user.save()
        res.status(201).send({succes: "image-updated"})
    }
    catch (err){
        res.status(404).send(err)
    }
}

usersCtrl.getUserImage = async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.set("Content-Type", "image/jpeg")
    res.send(user.image)
}

usersCtrl.getActivity = async (req, res) => {
    Users.findById(req.params.id, {comments: 1})
        .populate("activity").exec((err, user) => {
            if(err) {
                console.log(err)
            } else{
                Activity.populate(user.activity, {path: "news", select: "-image -comments"}, (err, activity) => {
                    if(err){
                        console.log(err)
                    } else{
                        res.send(activity)
                    }
                })
            }
    })
}

module.exports = usersCtrl;