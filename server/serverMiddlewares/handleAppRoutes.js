

const errorNames = require("../../frontEnd/src/const/_const.js");
const createError = require("../../frontEnd/src/utils/createError.js");

const apiApp = require("../../frontEnd/src/api/routeApi/app/_apiApp");
const router = require("../routers/task.router.js");
const handleAppRoutes = async(app) => {
  try {
        app.use(`/app`, router);
  } catch (error) {
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 400,
      message: error,
    });
  }
};

module.exports = handleAppRoutes;
