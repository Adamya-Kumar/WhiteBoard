WhiteBoard
WhiteBoard is a collaborative drawing application built with Node.js, Express, and MongoDB. It allows users to create, save, and share whiteboard sessions in real-time. The project uses modern JavaScript (ES Modules), and follows best practices for environment configuration and code organization.

Features
Real-time collaborative whiteboard
REST API endpoints for managing boards
MongoDB integration for persistent storage
Single Page Application (SPA) setup
Express.js server serving static frontend and API
Environment variable configuration via .env file
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (with Mongoose ODM)
Frontend: Served from the /dist directory (not included in this README)
Other: dotenv, body-parser
Getting Started
1. Clone the Repository
bash
git clone https://github.com/Adamya-Kumar/WhiteBoard.git
cd WhiteBoard
2. Install Dependencies
Make sure you have Node.js and npm installed.

bash
npm install
3. Set Up Environment Variables
Create a .env file in the root directory with the following content:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
PORT: The port number (default is 5000 if not specified).
MONGO_URI: Your MongoDB connection URI. You can use MongoDB Atlas or a local MongoDB server.
4. Run the Server
bash
npm start
or (if a start script is not defined)

bash
node server.js
The server will start at http://localhost:5000 (or your specified port).

5. Access the Application
Open your browser and go to http://localhost:5000.

Project Structure
Code
WhiteBoard/
├── dist/                   # Frontend static files (built SPA)
├── router/
│   └── router.board.js     # Board-related API routes
├── server.js               # Main server file
├── package.json
├── .env                    # Environment variables (not committed)
└── ...                     # Other configuration files
Installed Packages
express: Fast, unopinionated, minimalist web framework for Node.js.
path: Node.js core module for handling file paths.
dotenv: Loads environment variables from .env file.
body-parser: Node.js body parsing middleware.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
Environment Variables
Variable	Description	Example
PORT	Server port	5000
MONGO_URI	MongoDB connection string	mongodb://localhost:27017/db
API Endpoints
All board-related API endpoints are prefixed with /boards. Refer to router/router.board.js for details.

Notes
The frontend (dist/) is served statically by Express. Make sure to build your frontend and place the output in the dist folder.
The fallback route (*) serves index.html to support client-side routing.
