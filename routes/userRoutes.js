const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const emotionContoller = require('../controllers/emotionController');

router.post('/register', userController.registerUser);

// router.post('/emotion', emotionContoller.emotion );

module.exports = router;
