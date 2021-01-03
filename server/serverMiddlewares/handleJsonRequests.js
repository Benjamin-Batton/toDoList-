const bodyParser = require("body-parser");

const handleJsonRequests = (app) => {
	app.use(bodyParser.json());
};

module.exports = handleJsonRequests;
