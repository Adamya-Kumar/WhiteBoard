# Kanban Board React App (Vite)

This project is a React.js Kanban board UI built with Vite. It integrates with an Express/MongoDB backend and supports:

- Board List Sidebar: Toggle between boards
- Board Detail Page: Show tasks grouped by status
- Create Task Modal/Form
- Edit/Delete Task
- (Optional) Task priority badges (color-coded)
- (Optional) Simple CSS layout (no Tailwind/Material UI)

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## API Integration

This app expects the backend server to expose endpoints for board and task CRUD operations. Update the API URLs in the frontend as needed to match your backend.

## Features
- Fast React development with Vite
- Simple, clean UI for managing boards and tasks
- Easy integration with Express/MongoDB backend

# Deployment Instructions

## Build Frontend
1. In the `client` folder, run:
   ```sh
   npm run build
   ```
   This outputs static files to the `dist` folder in the project root.

## Serve with Express Backend
2. In the project root, run:
   ```sh
   node server.js
   ```
   This serves both the API and the React frontend on the same port (default: 5000).

## Environment Variables
- Set your MongoDB URI in a `.env` file:
  ```env
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

## Production Ready
- All API and frontend routes are handled by Express.
- Static files are served from the `dist` folder.
- SPA fallback is enabled for React Router support.

---

For further deployment (e.g., to Render, Heroku, or your own server), just run `npm run build` in `client` and then `node server.js` in the root.
