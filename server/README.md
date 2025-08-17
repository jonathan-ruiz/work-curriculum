# ChatGPT Backend Proxy

A secure backend proxy for ChatGPT API integration that keeps your API key safe on the server side.

## Features

- 🔒 **Secure**: API key never leaves the server
- 🚦 **Rate Limiting**: Prevents abuse with configurable limits
- 🌍 **CORS Support**: Configurable allowed origins
- 💾 **Caching**: Client-side caching for cost savings
- 📊 **Health Check**: `/health` endpoint for monitoring
- 🛡️ **Error Handling**: Comprehensive error handling and logging

## Quick Start

1. **Setup the backend:**
   ```bash
   cd server
   ./setup.sh
   ```

2. **Configure your API key:**
   ```bash
   # Edit .env file
   nano .env
   # Add your OpenAI API key
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Start the server:**
   ```bash
   npm run dev    # Development mode
   # or
   npm start      # Production mode
   ```

4. **Update your frontend:**
   Make sure your frontend has `VITE_BACKEND_URL=http://localhost:3001` in the `.env` file.

## Configuration

### Environment Variables

Create a `.env` file in the server directory:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=3001
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=10

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://yourdomain.com
```

### Rate Limiting

- **RATE_LIMIT_MAX_REQUESTS**: Number of requests allowed per window (default: 10)
- **RATE_LIMIT_WINDOW_MS**: Time window in milliseconds (default: 60000 = 1 minute)

### CORS

- **ALLOWED_ORIGINS**: Comma-separated list of allowed origins
- Default includes localhost for development

## API Endpoints

### POST /api/chat

Send a message to ChatGPT.

**Request:**
```json
{
  "message": "What is Jonathan's experience with Python?"
}
```

**Response:**
```json
{
  "response": "Jonathan has experience with Python...",
  "usage": {
    "prompt_tokens": 150,
    "completion_tokens": 50,
    "total_tokens": 200
  }
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "environment": "development"
}
```

## Error Responses

### Rate Limit Exceeded (429)
```json
{
  "error": "Too many requests",
  "retryAfter": 60,
  "remainingPoints": 0
}
```

### Bad Request (400)
```json
{
  "error": "Message is required and must be a string"
}
```

### Server Error (500)
```json
{
  "error": "Internal server error",
  "message": "Something went wrong"
}
```

## Security Features

1. **API Key Protection**: API key is only stored on the server
2. **Rate Limiting**: Prevents abuse by limiting requests per IP
3. **CORS Protection**: Only allows requests from configured origins
4. **Input Validation**: Validates all incoming requests
5. **Error Handling**: Secure error messages (no sensitive data leaked)

## Production Deployment

### Using PM2

```bash
# Install PM2 globally
npm install -g pm2

# Start the server
pm2 start server.js --name "chatgpt-proxy"

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Using Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3001
OPENAI_API_KEY=your_production_api_key
RATE_LIMIT_MAX_REQUESTS=20
RATE_LIMIT_WINDOW_MS=60000
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## Monitoring

The server logs all requests and errors. Monitor the logs for:

- Successful requests: `Chat request from IP - Success`
- Rate limit violations: `Too many requests`
- API errors: `OpenAI API error`
- Server errors: `Server error`

## Troubleshooting

### Common Issues

1. **CORS Errors**: Check `ALLOWED_ORIGINS` in your `.env` file
2. **Rate Limit Errors**: Increase `RATE_LIMIT_MAX_REQUESTS` if needed
3. **API Key Errors**: Verify your OpenAI API key is correct and has credits
4. **Port Already in Use**: Change the `PORT` in your `.env` file

### Debug Mode

Set `NODE_ENV=development` to get more detailed error messages.

## License

MIT License - see LICENSE file for details.
