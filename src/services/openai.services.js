import OpenAI from 'openai';
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getOpenAIExample = async (req, res) => {
    try {
        const response = await client.responses.create({
            model: "gpt-4.1",
            input: "Write a one-sentence bedtime story about a unicorn.",
        });
        return response;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch OpenAI example' });
    }
};

export const getQuoteFormat = async (req, res) => {
    try {
        const response = await client.responses.create({
            model: "gpt-4.1",
            input: "Provide a quote format for a motivational quote.",
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quote format' });
    }
}