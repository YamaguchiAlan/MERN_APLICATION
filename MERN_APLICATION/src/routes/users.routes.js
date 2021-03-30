const {Router} = require('express');
const router = Router();
const multer = require('multer')

const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        res.status(401).json({
            error: {message: "Not Authorized"}
        })
    }
}

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.mimetype.match(/\/(png|jpg|jpeg)$/)){
            cb (new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

const { signup,
        signin,
        authenticate,
        getUser,
        uploadImage,
        getUserImage,
        getActivity,
        logout,
        followUser,
        unfollowUser,
        getFollowing,
        getFollowers
    } = require('../controllers/users.controllers');

router.post('/api/users/signup', signup)

router.post('/api/users/signin', signin)

router.get('/api/users/authenticate', isAuthenticated , authenticate)

router.get('/api/users/logout', logout)

router.get("/api/users/:id", getUser)

router.post('/api/users/:id/image', upload.single('user-img'), uploadImage)

router.put('/api/users/image', isAuthenticated, upload.single('user-img'), uploadImage)

router.get('/api/users/:id/image', getUserImage)

router.get("/api/users/:id/activity", getActivity)

router.put('/api/users/follow/:userId', isAuthenticated, followUser)

router.put('/api/users/unfollow/:userId', isAuthenticated, unfollowUser)

router.get("/api/users/:id/following", getFollowing)

router.get("/api/users/:id/followers", getFollowers)

module.exports = router;