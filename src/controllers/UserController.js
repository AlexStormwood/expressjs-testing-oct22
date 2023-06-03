const express = require('express');
const router = express.Router();

router.post("/signup", (request, response) => {

	if (request.body.email
		 &&
		 request.body.email.includes("@") 
		 &&
		 request.body.password){
		response.json({message:"Sign up success!"});
	} else {
		response.status(400).json({message:"Sign up failure!"});
	}

});

module.exports = router;