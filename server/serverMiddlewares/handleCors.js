const cors = require("cors");

const handleCors = (app) => {
	app.use(cors());
};
module.exports = handleCors;
