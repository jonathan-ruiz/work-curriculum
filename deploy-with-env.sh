#!/bin/bash

# Enhanced Deploy Script with Environment Variable Support
# Usage: ./deploy-with-env.sh <domain> <destination_folder> [env_method]

# Check if required arguments are provided
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <domain> <destination_folder> [env_method]"
    echo ""
    echo "Environment variable methods:"
    echo "  env_var    - Use server's OPENAI_API_KEY environment variable (default)"
    echo "  env_file   - Create .env file from server's environment variable"
    echo "  prompt     - Prompt for API key during deployment"
    echo "  none       - Deploy without ChatGPT (fallback mode)"
    exit 1
fi

DOMAIN=$1
DESTINATION_FOLDER=$2
ENV_METHOD=${3:-env_var}  # Default to env_var method

echo "=== Enhanced Deployment Script ==="
echo "Domain: $DOMAIN"
echo "Destination: $DESTINATION_FOLDER"
echo "Environment method: $ENV_METHOD"
echo ""

# Provisioning
echo "Provisioning..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm i stable
npm i

# Clean up
echo "Clean Up..."
rm -rf dist dist.zip

# Build
echo "Build..."
npm run build

# Packaging
echo "Packaging..."
zip -r dist.zip dist

# Delivering
echo "Delivering..."
scp dist.zip "$DOMAIN":~/

# Update with environment variable handling
echo "Update app with environment variables..."

case $ENV_METHOD in
    "env_var")
        echo "Using server's OPENAI_API_KEY environment variable..."
        ssh "$DOMAIN" "rm -rf ~/dist; unzip dist.zip; sudo cp -rf dist/* $DESTINATION_FOLDER"
        ;;
    "env_file")
        echo "Creating .env file from server's environment variable..."
        ssh "$DOMAIN" "rm -rf ~/dist; unzip dist.zip; echo 'VITE_OPENAI_API_KEY=\$OPENAI_API_KEY' > dist/.env; sudo cp -rf dist/* $DESTINATION_FOLDER"
        ;;
    "prompt")
        echo "Prompting for API key..."
        read -s -p "Enter your OpenAI API key: " api_key
        echo
        ssh "$DOMAIN" "rm -rf ~/dist; unzip dist.zip; echo 'VITE_OPENAI_API_KEY=$api_key' > dist/.env; sudo cp -rf dist/* $DESTINATION_FOLDER"
        ;;
    "none")
        echo "Deploying without ChatGPT (fallback mode)..."
        ssh "$DOMAIN" "rm -rf ~/dist; unzip dist.zip; sudo cp -rf dist/* $DESTINATION_FOLDER"
        ;;
    *)
        echo "Unknown environment method: $ENV_METHOD"
        exit 1
        ;;
esac

# Clean up
echo "Final Clean Up..."
rm -rf dist dist.zip

echo "=== Deployment Complete ==="
echo "Your application has been deployed to $DOMAIN:$DESTINATION_FOLDER"
echo ""
echo "To verify ChatGPT integration:"
echo "1. Visit your website"
echo "2. Click the 'Ask AI' button in the header"
echo "3. Ask a question about your work experience"
echo ""
echo "If ChatGPT doesn't work, check:"
echo "- Server environment variable: ssh $DOMAIN 'echo \$OPENAI_API_KEY'"
echo "- Or run the server setup script: ssh $DOMAIN './server-setup.sh'"
