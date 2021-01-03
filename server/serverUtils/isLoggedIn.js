const createError = require("../../frontEnd/src/utils/createError.js");
const errorNames = require("../../frontEnd/src/const/_const.js");
const jwt = require("jsonwebtoken");
const config = require("config");

const isLoggedIn = (req) => {
	// const token = req.headers.authorization.split(" ")[1];
	// if (!token) {
	// 	throw new createError(
	// 		errorNames.NOT_FOUND,
	// 		400,
	// 		"You are not authorized, please enter your login and password"
	// 	);
	// }
	// jwt.verify(token, config.get("jwtsecretKey"), (err, afterDecoded) => {
	// 	if (afterDecoded) {
	// 		console.log(afterDecoded);
	// 		req.user = afterDecoded;
			
	// 	} else
	// 		throw new createError(
	// 			errorNames.INCORRECT_VALUES,
	// 			400,
	// 			"Decoded token error",
	// 			err
	// 		);
	// });
	
	return true;
};

module.exports = isLoggedIn;
