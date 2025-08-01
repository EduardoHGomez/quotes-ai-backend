const express = require('express');

// Routes
const connectionsRoutes = require('./routes/connections.routes');
const openAIRoutes = require('./routes/openai.routes');

module.exports = () => {
    const app = express();
    app.use(express.json());
    // app.use('/api', routes);

    // Health-check endpoint
    app.get('/health', (_, res) => res.json({ status: 'ok' }));

    app.use('/api/connections', connectionsRoutes);
    app.use('/api/openai', openAIRoutes);

    app.use((_, res) => res.status(404).json({ message: 'Not found' }));

    return app;
};
