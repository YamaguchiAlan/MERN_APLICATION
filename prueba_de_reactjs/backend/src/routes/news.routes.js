const {Router} = require('express');
const router = Router();
const multer = require('multer');
const Multiparty = require('connect-multiparty');

const upload = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            cb (new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

const multiparty = Multiparty({uploadDir: './img/'})

const { getNews, createNews, newsImage, getNewsImg, formImg } = require('../controllers/news.controllers');

router.get('/api/news', getNews);

router.post('/api/create-news', createNews);

router.post('/api/news-img', upload.single("news-img") , newsImage,
    (error, req, res, next) => {
        res.status(400).send({error: error.message})
    }
);

router.get('/api/:id/news-img', getNewsImg)

router.post('/api/form-img', multiparty, formImg);

module.exports = router