const request = require('supertest');

const {app} = require("../src/server");

// test suite 
describe("Has a homepage...", () => {

	// test 
	it("...it responds with status 200.", async () => {
		//    response = await request(server Instance).HTTP method("some route");
		const response = await request(app).get("/");

		expect(response.statusCode).toEqual(200);
	});

	// test 
	it("...it responds with a JSON object.", async () => {
			//    response = await request(server Instance).HTTP method("some route");
			const response = await request(app).get("/");

			const responseBodyDataType = typeof(response.body);
			console.log(responseBodyDataType);

			expect(responseBodyDataType).toEqual("object");
	});
});

describe("User...", () => {

	describe("...can sign up...", () => {
		it("...with a valid email address and password", async () => {
			// expect an object on the response with user data
			
			
			//const response = await request(app).post("/users/signup").send({email: "blahblah", password:"blahblah"});

			const response = await request(app)
			.post("/users/signup")
			.send({
				email: "test@email.com", 
				password:"blahblah"
			});

			expect(response.body).toEqual({message:"Sign up success!"});
		});

	});

	describe("...can NOT sign up...", () => {
		it("...with an invalid email address", async () => {
			// expect one error on the response

			const response = await request(app)
			.post("/users/signup")
			.send({
				email: "blahblah", 
				password:"blahblah"
			});

			expect(response.body).toEqual({message:"Sign up failure!"});
			expect(response.statusCode).toEqual(400);
		});

		// it("...with an invalid password", async () => {
		// 	// expect one error on the response
		// });

		// it("...with an invalid email address and invalid password", async () => {
		// 	// expect two errors on the response
		// });

	});

});