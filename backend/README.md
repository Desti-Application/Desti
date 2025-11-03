# Desti Backend

Welcome to the Desti backend! This project uses Node.js and Express to build a RESTful API with a controller and service architecture.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Install dependencies**
	Open a terminal and run:
	```powershell
	npm install
	```
	This will install all required packages (Express, etc.).

2. **Project Structure**
	- `index.js`: Main entry point for the Express server.
	- `controllers/`: Contains route controllers (e.g., `userController.js`).
	- `services/`: Contains business logic/services (e.g., `userService.js`).

3. **Run the Server**
	Start the backend server with:
	```powershell
	npm start
	```
	The server will run on [http://localhost:3000](http://localhost:3000) by default.

4. **Test an Endpoint**
	Try accessing the users endpoint:
	- Open your browser or use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/):
	```powershell
	curl http://localhost:3000/users
	```
	You should see a list of sample users returned as JSON.

## How It Works
- **Controllers** handle HTTP requests and responses.
- **Services** contain the core logic and data handling.
- The controller calls the service, then sends the result to the client.

## Next Steps
- Add more controllers and services for new features.
- Connect to a database (e.g., MongoDB, PostgreSQL).
- Add authentication and validation.

## Useful Resources
- [Express Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MDN: Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

---
Happy coding! If you get stuck, check the docs above or ask for help.
