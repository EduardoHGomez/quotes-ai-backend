// Load environment variables
// require('dotenv').config();
import express from "express";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware to parse JSON in request bodies
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/openai', async (req, res) => {

    const prompt = req.query.prompt || "Only answer me 'No prompt was sent'";

    try {
        const response = await client.responses.create({
            model: "gpt-4.1",
            input: prompt
        });

        res.status(200).json({
            name: 'Eduardo',
            prompt,
            response
        });
    } catch (error) {
        console.error('OpenAI error:', error);
        res.status(500).json({ error: 'Failed to fetch response from OpenAI.' });
    }

});




// Define the port from .env or fallback
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
