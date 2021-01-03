const bodyParser = require("body-parser");

const handleUrlencodedRequests = (app) => {
	app.use(bodyParser.urlencoded({ extended: true }));
};

module.exports = handleUrlencodedRequests;
