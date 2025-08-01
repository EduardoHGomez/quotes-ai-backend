const express = require('express');
const openai = require('../controllers/openai.controller');
const router = express.Router();

router.get('/', openai.getOpenAIExample);
router.get('/getQuoteFormat', openai.getQuoteFormat);

module.exports = router;