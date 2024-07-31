#!/bin/bash

# Check if all required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <domain> <destination_folder>"
    exit 1
fi

DOMAIN=$1
DESTINATION_FOLDER=$2

# Provisioning
echo "Provisioning"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm i stable
npm i

# Clean up
echo "Clean Up"
rm -rf dist dist.zip

# Build
echo "Build"
npm run build

# Packaging
echo "Packaging"
zip -r dist.zip dist

# Delivering
echo "Delivering"
scp dist.zip "$DOMAIN":~/

# Update
echo "Update app"

ssh "$DOMAIN" "rm -rf ~/dist; unzip dist.zip; sudo cp -rf dist/* $DESTINATION_FOLDER"

# Clean up
echo "Final Clean Up"
rm -rf dist dist.zip
