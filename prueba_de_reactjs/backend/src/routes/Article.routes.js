const { Router } = require('express');
const router = Router();
const multer = require('multer');

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.mimetype.match(/\/(png|jpg|jpeg)$/)){
            cb (new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

const {
    createArticle,
    getArticle,
    formImg,
    getFormImg,
    getArticleImages,
    getArticleCover,
    updateArticle,
    updateArticleImg
} = require('../controllers/article.controllers');

router.post('/api/form-img/:id', multer({dest: './img'}).single('upload'), formImg);

router.get('/api/form-img/:id/:path', getFormImg)

router.post('/api/create-article', createArticle)

router.put('/api/update-article/:id', updateArticle)

router.put('/api/update-article-img/:id', upload.single('article-img'), updateArticleImg)

router.get('/api/article/:id', getArticle);

router.get('/api/article-cover-img/:id', getArticleCover)

router.get('/api/article/:id/img/:index', getArticleImages)

module.exports = router;