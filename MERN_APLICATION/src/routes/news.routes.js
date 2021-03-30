const {Router} = require('express');
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

const { getNews,
        getNewsOfType,
        newsImage,
        updateNewsImage,
        getNewsImg,
        deleteNews,
        searchBar,
        getMyNewsOfType
    } = require('../controllers/news.controllers');

router.get('/api/news', getNews);

router.get("/api/news/type/:type", getNewsOfType)

router.post('/api/news/:id/image', isAuthenticated, upload.single("body-img") , newsImage,
    (error, req, res, next) => {
        console.log(error)
        res.status(400).send({error: error.message})
    }
);

router.put('/api/news/:id/image', isAuthenticated, upload.single("body-img"), updateNewsImage)

router.get('/api/news/:id/image', getNewsImg)

router.delete('/api/news/:id', isAuthenticated, deleteNews)

router.get('/api/news/search/:title', searchBar)

router.get("/api/my-news/type/:type", isAuthenticated, getMyNewsOfType)

module.exports = router