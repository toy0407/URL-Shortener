const express = require('express');
const router = express.Router();

const {generateShortId} = require('../controllers/urlController');

router.post('/',generateShortId);


module.exports = router;