const {Router} = require('express')
const router = Router();

const { createComment, deleteComment, getComments, LikeComment, disikeComment } = require('../controllers/comments.controllers')

router.post('/api/create-comment/:newsId', createComment)

router.delete('/api/delete-comment/:newsId', deleteComment)

router.get('/api/:newsId/comments', getComments)

router.put('/api/like-comment/:id/:operator', LikeComment)

router.put('/api/dislike-comment/:id/:operator', disikeComment)

module.exports = router;