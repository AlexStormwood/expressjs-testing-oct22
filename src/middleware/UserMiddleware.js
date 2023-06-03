

const bodyHasEmail = (request, response, next) => {
	if (request.body.email){
		next();
	} else {
		// add error to error stack 
	}
}

const bodyHasPassword = (request, response, next) => {
	if (request.body.password){
		next();
	} else {
		// add error to error stack 
	}
}

const emailIsValid = (request, response, next) => {
	if (request.body.email.includes("@")){
		next();
	} else {
		// add error to stack
	}
}

module.exports = {
	bodyHasEmail, bodyHasPassword, emailIsValid
}