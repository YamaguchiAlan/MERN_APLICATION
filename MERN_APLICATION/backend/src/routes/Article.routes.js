const { Router } = require('express');
const router = Router();
const multer = require('multer');

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

const {
    createArticle,
    getArticle,
    increaseViews,
    formImg,
    getFormImg,
    getArticleImages,
    getArticleCover,
    updateArticle,
    updateArticleImg
} = require('../controllers/article.controllers');

router.post('/api/article/form/:userId/image', upload.single('upload'), formImg);

router.get('/api/article/form/image', getFormImg)

router.post('/api/article', isAuthenticated, createArticle)

router.put('/api/article/:id', isAuthenticated, updateArticle)

router.put('/api/article/:id/image', isAuthenticated, upload.single('article-img'), updateArticleImg)

router.get('/api/articles/:id', getArticle);

router.put('/api/articles/:id/views', increaseViews);

router.get('/api/article/:id/cover-image', getArticleCover)

router.get('/api/article/:id/image', getArticleImages)

module.exports = router;