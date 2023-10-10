const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/api/data', controller.getData);
router.post('/api/data', controller.createData);

module.exports = router;