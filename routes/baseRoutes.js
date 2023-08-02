const express = require('express');
const router = express.Router();

const {findByShortId, getAnalyticsOfShortId} = require('../controllers/urlController');

router.get('/');

router.get('/:id',findByShortId);

router.get('/:id/analytics', getAnalyticsOfShortId);

module.exports = router;