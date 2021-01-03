const { errorNames } = require("../../frontEnd/src/const/_const.js");
const { createError } = require("../../frontEnd/src/utils/createError.js");
const authRouter = require("../routers/auth.router.js");
const serveStatic = require("serve-static");
const _ = require("lodash");
const {
  userValidationRules,
  authMiddleware,
} = require("../routeMiddlewares/authMiddlewares/loginMiddleware.js");
const apiAuth = require("../../frontEnd/src/api/routeApi/auth/_apiAuth");

const handleAuthRoutes = async (app) => {
  try {
    //All validation we can iclude in promise chain on controller, but i want to do it like this
    app.use(`/auth`, authRouter);
  } catch (error) {
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 400,
      message: error,
    });
  }
};

module.exports = handleAuthRoutes;
