const {Router} = require('express');
const router = Router();

const { signup, signin } = require('../controllers/users.controllers');

router.post('/api/signup', signup)

router.post('/api/signin', signin)

module.exports = router;