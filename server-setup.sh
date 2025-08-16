#!/bin/bash

# Server Environment Setup Script
# This script helps you set up environment variables on your production server

echo "=== Server Environment Setup ==="
echo "This script will help you configure environment variables for the ChatGPT integration."
echo ""

# Check if we're on the server
if [ -z "$SSH_CLIENT" ] && [ -z "$SSH_TTY" ]; then
    echo "This script should be run on your production server."
    echo "SSH into your server first, then run this script."
    exit 1
fi

echo "Current environment variables:"
echo "OPENAI_API_KEY: ${OPENAI_API_KEY:+'***SET***'}"
echo ""

# Option 1: Set environment variable for current session
echo "Option 1: Set environment variable for current session"
echo "export OPENAI_API_KEY='your-api-key-here'"
echo ""

# Option 2: Add to .bashrc for persistence
echo "Option 2: Add to .bashrc for persistence (recommended)"
read -p "Do you want to add the API key to .bashrc? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your OpenAI API key: " api_key
    echo "export OPENAI_API_KEY='$api_key'" >> ~/.bashrc
    echo "Environment variable added to .bashrc"
    echo "You'll need to restart your shell or run 'source ~/.bashrc' for changes to take effect"
fi

# Option 3: Create a .env file manually
echo ""
echo "Option 3: Create .env file manually"
echo "You can also create a .env file in your web directory:"
echo "echo 'VITE_OPENAI_API_KEY=your-api-key-here' > /path/to/your/web/directory/.env"
echo ""

# Option 4: Systemd environment file (if using systemd)
echo "Option 4: Systemd environment file (if using systemd)"
echo "Create /etc/systemd/system/your-app.service.d/env.conf:"
echo "[Service]"
echo "Environment=\"OPENAI_API_KEY=your-api-key-here\""
echo ""

echo "=== Setup Complete ==="
echo "After setting up the environment variable, redeploy your application:"
echo "./deploy.sh your-server.com /path/to/web/directory"
