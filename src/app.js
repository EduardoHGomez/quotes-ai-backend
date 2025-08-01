const express = require('express');

module.exports = () => {
    const app = express();
    app.use(express.json());
    // app.use('/api', routes);

    // Health-check endpoint
    app.get('/health', (_, res) => res.json({ status: 'ok' }));


    app.use((_, res) => res.status(404).json({ message: 'Not found' }));
    return app;
};
