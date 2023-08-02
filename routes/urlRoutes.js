const express = require('express');
const {generateShortId} = require('../controllers/urlController');
const router = express.Router();

router.post('/',generateShortId);

module.exports = router;