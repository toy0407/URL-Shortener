const express = require('express');
const router = express.Router();

const {findByShortId} = require('../controllers/urlController');

router.get('/');

router.get('/:id',findByShortId);

module.exports = router;