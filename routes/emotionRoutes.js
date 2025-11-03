const express = require('express');
const router = express.Router();
const emotionContoller = require('../controllers/emotionController');


router.post('/emotion', emotionContoller.emotion );

module.exports = router;