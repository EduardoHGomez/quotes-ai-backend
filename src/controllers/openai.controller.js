const service = require('../services/openai.services');

exports.getOpenAIExample = async (req, res) => {
    try {
        const response = await service.getOpenAIExample();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch OpenAI example' });
    }
}

exports.getQuoteFormat = async (req, res) => {
    try {
        const response = await service.getQuoteFormat();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quote format' });
    }
}