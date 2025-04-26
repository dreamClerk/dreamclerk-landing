# Dreamclerk Landing Page

This is a Next.js application with a local authentication server.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   PORT=3001
   JWT_SECRET=your-secret-key-change-this-in-production
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

## Running the Application

### Windows

Run the batch file:
```bash
start-local.bat
```

### Unix/Linux/Mac

Make the script executable and run it:
```bash
chmod +x start-local.sh
./start-local.sh
```

### Manual Start

Alternatively, you can start the server and Next.js application separately:

1. Start the server:
   ```bash
   node server/index.js
   ```

2. In a separate terminal, start the Next.js application:
   ```bash
   npm run dev
   ```

## Accessing the Application

- Next.js application: http://localhost:3000
- API server: http://localhost:3001

## Features

- Local authentication with JWT
- User registration and login
- Admin dashboard for user management
- SQLite database for data storage

## Project Structure

- `/app` - Next.js application pages and components
- `/components` - Reusable UI components
- `/context` - React context providers
- `/server` - Local authentication server
  - `server/index.js` - Express server setup
  - `server/auth.js` - Authentication handlers
  - `server/db.js` - SQLite database setup 