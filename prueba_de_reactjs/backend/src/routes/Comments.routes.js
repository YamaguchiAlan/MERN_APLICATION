const {Router} = require('express')
const router = Router();

const { createComment, getComments } = require('../controllers/comments.controllers')

router.post('/api/create-comment/:newsId', createComment)

router.get('/api/:newsId/comments', getComments)

module.exports = router;