# ChatGPT Integration Setup Guide

This guide will help you set up the ChatGPT integration for your work curriculum website.

## Quick Setup

### 1. Get an OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the generated API key (keep it secure!)

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```bash
# .env
VITE_OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 3. Restart Development Server

```bash
npm run dev
```

## How It Works

### Chat Interface
- **Header Button**: "Ask AI" button in the header next to the PDF link
- **Toggle**: Click to open/close the chat interface
- **Input**: Type questions about your experience
- **Responses**: AI provides context-aware answers

### AI Context
The AI is pre-configured with information about your background:
- Education and certifications
- Contact information
- Social media profiles
- Professional experience

### Fallback Mode
If no API key is configured:
- Chat still works with simulated responses
- Warning icon appears in chat header
- Users can still interact with the interface

## Customization

### Modify AI Context
Edit `src/services/chatgpt.ts` and update the `SYSTEM_CONTEXT`:

```typescript
const SYSTEM_CONTEXT = `You are an AI assistant helping people learn about [Your Name], a [Your Title] with the following background:

- [Your education]
- [Your certifications]
- [Your experience summary]
- Contact: [your-email]
- Social media: [your-profiles]

[Additional context about your background...]`;
```

### Change AI Model
Modify the model in the API call:

```typescript
body: JSON.stringify({
  model: 'gpt-4', // Change from gpt-3.5-turbo to gpt-4
  messages: messages,
  max_tokens: 500,
  temperature: 0.7
})
```

### Styling
The chat interface uses Tailwind CSS classes. You can customize:
- Colors: Modify the `bg-blue-600` classes
- Size: Change `w-80` for width, `h-64` for message area height
- Position: Adjust `bottom-4 right-4` for button placement

## Security Notes

- **API Key**: Never commit your `.env` file to version control
- **Rate Limits**: OpenAI has usage limits and costs
- **Data Privacy**: Messages are sent to OpenAI's servers

## Production Deployment

### Option 1: Enhanced Deploy Script (Recommended)

Use the enhanced deployment script that handles environment variables:

```bash
# Deploy using server's environment variable
./deploy-with-env.sh your-server.com /var/www/html

# Deploy with API key prompt
./deploy-with-env.sh your-server.com /var/www/html prompt

# Deploy without ChatGPT (fallback mode)
./deploy-with-env.sh your-server.com /var/www/html none
```

### Option 2: Server Environment Setup

1. **SSH into your server**:
   ```bash
   ssh your-server.com
   ```

2. **Set environment variable**:
   ```bash
   export OPENAI_API_KEY='your-api-key-here'
   echo "export OPENAI_API_KEY='your-api-key-here'" >> ~/.bashrc
   source ~/.bashrc
   ```

3. **Deploy normally**:
   ```bash
   ./deploy.sh your-server.com /var/www/html
   ```

### Option 3: Manual .env File

Create a `.env` file directly on your server:

```bash
ssh your-server.com
echo "VITE_OPENAI_API_KEY=your-api-key-here" > /var/www/html/.env
```

### Verification

After deployment, verify ChatGPT works:
1. Visit your website
2. Click the "Ask AI" button
3. Ask a question about your experience

## Troubleshooting

### Chat Not Working
1. Check browser console for errors
2. Verify API key is correctly set
3. Ensure `.env` file is in project root
4. Restart development server

### API Errors
- **401 Unauthorized**: Invalid API key
- **429 Too Many Requests**: Rate limit exceeded
- **500 Server Error**: OpenAI service issue

### Performance
- Responses typically take 1-3 seconds
- Consider caching frequent questions
- Monitor API usage costs

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your OpenAI API key is valid
3. Ensure you have sufficient API credits
4. Check OpenAI's status page for service issues
