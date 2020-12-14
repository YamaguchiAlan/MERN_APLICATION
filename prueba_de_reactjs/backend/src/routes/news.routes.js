const {Router} = require('express');
const router = Router();
const multer = require('multer');

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            cb (new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})


const { getNews, newsImage, updateNewsImage, getNewsImg, deleteNews} = require('../controllers/news.controllers');

router.get('/api/news', getNews);

router.post('/api/news-img/:id', upload.single("body-img") , newsImage,
    (error, req, res, next) => {
        res.status(400).send({error: error.message})
    }
);

router.put('/api/update-news-img/:id', upload.single("body-img"), updateNewsImage)

router.get('/api/news-img/:id', getNewsImg)

router.delete('/api/news/delete/:id', deleteNews)

module.exports = router