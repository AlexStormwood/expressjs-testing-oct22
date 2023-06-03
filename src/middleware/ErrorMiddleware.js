

const errorCheck = (request, response, next) => {

	// if errors detected, send errors to user
	if (request.errors.length > 0){
		response.status(400).json({
			errors: request.errors
		});

	} else {
		// no errors, move along to next middleware or route
		next();
	}


}

module.exports = { errorCheck }