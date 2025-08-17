#!/bin/bash

echo "🚀 Setting up ChatGPT Backend Proxy..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.example .env
    echo "⚠️  Please edit .env file and add your OpenAI API key"
    echo "   OPENAI_API_KEY=your_actual_api_key_here"
else
    echo "✅ .env file already exists"
fi

# Check if OpenAI API key is configured
if grep -q "your_openai_api_key_here" .env; then
    echo "⚠️  Please update .env file with your actual OpenAI API key"
else
    echo "✅ OpenAI API key appears to be configured"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the server:"
echo "  npm run dev    # Development mode with auto-restart"
echo "  npm start      # Production mode"
echo ""
echo "The server will run on http://localhost:3001"
echo "Make sure your frontend is configured to use this backend URL"
