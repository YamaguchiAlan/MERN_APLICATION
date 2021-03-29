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

const {updateHiglight, updatePic, getHiglights, getHiglightPic} = require('../controllers/higlights.controllers');

router.put('/api/higlight', isAuthenticated, updateHiglight);

router.put('/api/higlight/:index/pic', isAuthenticated, upload.single("higlight-pic"), updatePic)

router.get('/api/higlights', getHiglights);

router.get('/api/higlight/:index/pic', getHiglightPic)

module.exports = router;