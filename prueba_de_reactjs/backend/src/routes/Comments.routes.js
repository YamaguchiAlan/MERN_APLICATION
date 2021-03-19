const {Router} = require('express')
const router = Router();

const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        res.status(401).json({
            error: {message: "Not Authorized"}
        })
    }
}

const { createComment, deleteComment, getComments, LikeComment, disikeComment } = require('../controllers/comments.controllers')

router.post('/api/comment/:newsId', isAuthenticated, createComment)

router.delete('/api/comment/:newsId', isAuthenticated, deleteComment)

router.get('/api/comments/:newsId', getComments)

router.put('/api/comment/:id/like/:operator', isAuthenticated, LikeComment)

router.put('/api/comment/:id/dislike/:operator', isAuthenticated, disikeComment)

module.exports = router;