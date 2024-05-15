const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/SignUp', userController.signup);
router.post('/login', userController.login);
router.get('/profile', userController.getProfile);

module.exports = router;