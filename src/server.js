require('dotenv').config();          // loads .env
const buildApp = require('./app');

const PORT = process.env.PORT || 3000;
buildApp().listen(PORT, () =>
    console.log(`Listening on ${PORT}`)
);
