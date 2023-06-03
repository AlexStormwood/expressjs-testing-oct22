

const express = require('express');

const app = express();

// Enable requests to have JSON data on their body
// eg. request.body can have JSON data 
app.use(express.json());

app.get("/", (request, response) => {

	response.json({
		message:"Hello world"
	});
});


const UserRouter = require("./controllers/UserController");
app.use("/users", UserRouter);

module.exports = {
	app
}