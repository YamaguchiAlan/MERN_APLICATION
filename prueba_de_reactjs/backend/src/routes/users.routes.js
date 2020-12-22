const {Router} = require('express');
const router = Router();

const isAuthenticated = (req, res, next) => {
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        return next();
    } else {
        res.json({
            error: {message: "Not Authorized"}
        })
    }
}

const { signup, signin, authenticate, getUser } = require('../controllers/users.controllers');

router.post('/api/signup', signup)

router.post('/api/signin', signin)

router.get('/api/authenticate', isAuthenticated , authenticate)

router.get("/api/user/:id", getUser)

module.exports = router;