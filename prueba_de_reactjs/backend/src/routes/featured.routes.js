const {Router} = require('express');
const router = Router();

const {createFeatured , getFeatured} = require('../controllers/featured.controllers');

router.post('/api/create-featured', createFeatured);

router.get('/api/featured', getFeatured);

module.exports = router;