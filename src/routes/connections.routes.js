const express = require('express');
const ctrl = require('../controllers/connections.controller');

const router = express.Router();

router.get('/', ctrl.list);
router.post('/', ctrl.create);

module.exports = router;