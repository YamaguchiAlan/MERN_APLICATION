const { Router } = require('express');
const router = Router();

const { newArticle, getArticle} = require('../controllers/article.controllers');

router.post('/api/article-form', newArticle);

router.get('/api/article/:id', getArticle);

module.exports = router;