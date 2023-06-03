const express = require('express');
const router = express.Router();

const {bodyHasEmail, bodyHasPassword, emailIsValid} = require('../middleware/UserMiddleware');
const { errorCheck } = require('../middleware/ErrorMiddleware');

router.post("/signup", 
	// app.use(express.json()) is here also
	// check for email
	bodyHasEmail,
	// check if email is valid
	emailIsValid,
	// check for password
	bodyHasPassword,
	// If errors exist, respond with errors:
	errorCheck,
	(request, response) => {


		// assume if we reached this point, 
		// middleware did not throw errors

		response.json({message:"Sign up success!"});

	// if (request.body.email
	// 	 &&
	// 	 request.body.email.includes("@") 
	// 	 &&
	// 	 request.body.password){
	// 	response.json({message:"Sign up success!"});
	// } else {
	// 	response.status(400).json({message:"Sign up failure!"});
	// }

});

router.post("/login", bodyHasEmail, bodyHasPassword, emailIsValid, errorCheck, (request, response) => {
	response.json({
		message:"Login success woooo!!"
	});
});

module.exports = router;