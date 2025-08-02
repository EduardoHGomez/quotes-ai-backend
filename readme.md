# Quotes AI Backend

A Node.js Express API for managing connections and integrating with OpenAI services.

## Prerequisites

- Node.js (version 14 or higher)
- npm
- OpenAI API Key

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `src/` directory with the following variables:
   ```env
   PORT=3000
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Available Scripts

### Start Development Server
```bash
npm run dev
```
Runs the server in development mode with file watching enabled.

### Start Production Server
```bash
npm start
```
Runs the server in production mode.

## API Endpoints

### Health Check
- `GET /health` - Returns server status

### Connections
- `GET /api/connections` - List all connections
- `POST /api/connections` - Create a new connection

### OpenAI Services
- `GET /api/openai` - Get OpenAI example response
- `GET /api/openai/getQuoteFormat` - Get quote format from OpenAI

## Project Structure

```
src/
├── app.js                        # Express app configuration
├── server.js                     # Server entry point
├── controllers/                  # Request handlers
│   ├── connections.controller.js
│   └── openai.controller.js
├── routes/                       # Route definitions
│   ├── connections.routes.js
│   └── openai.routes.js
├── services/                     # Business logic
│   ├── connections.service.js
│   └── openai.services.js
├── dtos/                         # Data Transfer Objects
├── middlewares/                  # Custom middleware
└── utils/                        # Utility functions
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `OPENAI_API_KEY` - Your OpenAI API key for AI services

## Notes

The server runs on `http://localhost:3000` by default.

### Start server

```
npm run dev
```
