#!/bin/bash
echo "Starting local development environment..."

# Start the server
node server/index.js &
SERVER_PID=$!

# Wait a moment for the server to start
sleep 3

# Start the Next.js application
npm run dev &
NEXT_PID=$!

echo "Local development environment started!"
echo "Server running on http://localhost:3001"
echo "Next.js application running on http://localhost:3000"

# Handle script termination
trap "kill $SERVER_PID $NEXT_PID; exit" INT TERM

# Keep the script running
wait 