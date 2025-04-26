@echo off
echo Starting local development environment...

REM Start the server
start cmd /k "node server/index.js"

REM Wait a moment for the server to start
timeout /t 3

REM Start the Next.js application
start cmd /k "npm run dev"

echo Local development environment started!
echo Server running on http://localhost:3001
echo Next.js application running on http://localhost:3000 