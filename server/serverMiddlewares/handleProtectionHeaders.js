const helmet = require("helmet");
 
const handleJsonRequests = (app) => {
	app.use(helmet());
};

module.exports = handleJsonRequests;
