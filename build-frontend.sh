#!/bin/bash

set -e  # Exit immediately if any command fails

PROJECT_NAME="Service Manager Frontend Swisscom"
LOG_DIR="logs"
LOG_FILE="$LOG_DIR/build.log"

echo "🔧 Building $PROJECT_NAME..."

# Step 1: Check for Node.js
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
  exit 1
fi

# Step 2: Check for NPM
if ! command -v npm &> /dev/null; then
  echo "❌ NPM is not installed. Please install it along with Node.js."
  exit 1
fi

# Step 3: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 4: Create logs directory
mkdir -p "$LOG_DIR"
echo "📁 Logs will be written to $LOG_FILE"

# Step 5: Build project using Vite
echo "🏗️  Running Vite build..."
npm run build | tee "$LOG_FILE"

echo "✅ Build completed successfully!"
