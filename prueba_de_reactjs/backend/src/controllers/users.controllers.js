const usersCtrl = {}
const passport = require('passport');

const Users = require('../models/Users');
const Activity = require('../models/Activity');
const router = require('../routes/news.routes');

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

usersCtrl.logout = (req, res) => {
    req.logout()
    res.send({
        success: {
            message: "Loged Out"
        }
    })
}

usersCtrl.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id, {password: 0, image: 0, email:0, activity:0})
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
    Users.findById(req.params.id, {activity: 1})
        .populate({path: "activity", populate: {path: "news", select: "title"}}).exec((err, user) => {
            if(err) {
                console.log(err)
                res.status(404).send(err)
            } else{
                res.send(user.activity)
            }
    })
}

usersCtrl.followUser = async (req, res) => {
    const {user} = req.body;

    await Users.findByIdAndUpdate(req.params.id, {
        $push: {following: user}
    })

    await Users.findByIdAndUpdate(user, {
        $push: {followers: req.params.id}
    })

    res.send({success: "Following User"})
}

usersCtrl.unfollowUser = async (req, res) => {
    const {user} = req.body;

    await Users.findByIdAndUpdate(req.params.id, {
        $pullAll: {following: [user]}
    })

    await Users.findByIdAndUpdate(user, {
        $pullAll: {followers: [req.params.id]}
    })

    res.send({success: "Unfollow User"})
}

usersCtrl.getFollowing = async (req, res) => {
    Users.findById(req.params.id, {following: 1}).populate("following", {username: 1}).exec((err, user) => {
        if(err) {
            console.log(err)
        } else{
            res.send(user.following)
        }
    })
}

usersCtrl.getFollowers = async (req, res) => {
    Users.findById(req.params.id, {followers: 1}).populate("followers", {username: 1}).exec((err, user) => {
        if(err) {
            console.log(err)
        } else{
            res.send(user.followers)
        }
    })
}

module.exports = usersCtrl;