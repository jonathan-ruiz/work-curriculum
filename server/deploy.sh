#!/bin/bash

# Backend Proxy Deployment Script
# Usage: ./deploy.sh [user]@domain.com /path/to/deploy

if [ $# -ne 2 ]; then
    echo "Usage: $0 [user]@domain.com /path/to/deploy"
    echo "Example: $0 user@example.com /var/www/backend"
    exit 1
fi

DOMAIN=$1
DESTINATION_FOLDER=$2

echo "🚀 Deploying ChatGPT Backend Proxy to $DOMAIN:$DESTINATION_FOLDER"

# Check if we're in the server directory
if [ ! -f "package.json" ] || [ ! -f "server.js" ]; then
    echo "❌ Error: This script must be run from the server directory"
    exit 1
fi

# Build the project
echo "📦 Installing dependencies..."
npm ci --only=production

# Create deployment package
echo "📦 Creating deployment package..."
tar -czf backend-deploy.tar.gz \
    --exclude=node_modules \
    --exclude=.env \
    --exclude=.git \
    --exclude=*.log \
    --exclude=*.tar.gz \
    .

# Upload to server
echo "📤 Uploading to server..."
scp backend-deploy.tar.gz "$DOMAIN":~/

# Deploy on server
echo "🔧 Deploying on server..."
ssh "$DOMAIN" << EOF
    # Create backup of existing deployment
    if [ -d "$DESTINATION_FOLDER" ]; then
        echo "💾 Creating backup..."
        sudo cp -r "$DESTINATION_FOLDER" "${DESTINATION_FOLDER}_backup_\$(date +%Y%m%d_%H%M%S)"
    fi

    # Extract new deployment
    echo "📦 Extracting deployment..."
    sudo mkdir -p "$DESTINATION_FOLDER"
    sudo tar -xzf ~/backend-deploy.tar.gz -C "$DESTINATION_FOLDER"
    sudo chown -R ec2-user:ec2-user "$DESTINATION_FOLDER"
    cd "$DESTINATION_FOLDER"

    # Install dependencies
    echo "📦 Installing dependencies..."
    npm ci --only=production

    # Check if .env exists, if not create from example
    if [ ! -f ".env" ]; then
        echo "⚠️  No .env file found. Creating from example..."
        cp env.example .env
        echo "⚠️  Please configure your .env file with your OpenAI API key"
    fi

    # Setup PM2 if available
    if command -v pm2 &> /dev/null; then
        echo "🔄 Restarting with PM2..."
        pm2 delete chatgpt-proxy 2>/dev/null || true
        pm2 start server.js --name "chatgpt-proxy"
        pm2 save
    else
        echo "⚠️  PM2 not found. You may need to restart the service manually"
    fi

    # Cleanup
    rm ~/backend-deploy.tar.gz
EOF

# Cleanup local files
rm backend-deploy.tar.gz

echo "✅ Deployment complete!"
echo ""
echo "🔧 Next steps:"
echo "1. SSH into your server: ssh $DOMAIN"
echo "2. Configure your .env file: nano $DESTINATION_FOLDER/.env"
echo "3. Add your OpenAI API key: OPENAI_API_KEY=your_key_here"
echo "4. Restart the service if needed"
echo ""
echo "📊 Monitor the service:"
echo "   pm2 logs chatgpt-proxy"
echo "   pm2 status"
