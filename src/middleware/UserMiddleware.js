

const bodyHasEmail = (request, response, next) => {
	if (request.body.email){
		next();
	} else {
		// add error to error stack 
		request.errors.push("Missing email.");
		next();
	}
}

const bodyHasPassword = (request, response, next) => {
	if (request.body.password){
		next();
	} else {
		// add error to error stack 
		request.errors.push("Missing password.");
		next();
	}
}

const emailIsValid = (request, response, next) => {
	if (request.body.email?.includes("@")){
		next();
	} else {
		// add error to stack
		request.errors.push("Email is not valid.");
		next();
	}
}

module.exports = {
	bodyHasEmail, bodyHasPassword, emailIsValid
}