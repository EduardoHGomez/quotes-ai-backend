// Load environment variables
// require('dotenv').config();

const express = require('express');
const app = express();

// Middleware to parse JSON in request bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Define the port from .env or fallback
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
