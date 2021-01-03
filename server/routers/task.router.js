const { Router } = require("express");
const errorNames = require("../../frontEnd/src/const/_const.js");
const createError = require("../../frontEnd/src/utils/createError.js");
const bcrypt = require("bcryptjs");
const validController = require("../serverUtils/validController.js");
const {
  userValidationRules,
  authMiddleware,
} = require("../routeMiddlewares/authMiddlewares/loginMiddleware.js");
const passport = require("../passport.js");
const apiApp = require("../../frontEnd/src/api/routeApi/app/_apiApp");
const taskMiddlewares = require("../routeMiddlewares/taskMiddlewares/_taskRouteMiddlewares.js");
const tasksControllers = require("../routeControllers/tasksControllers/tasksController.js");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = Router();
const User = require("../models/User");
const initValidateMiddleware = require("../serverUtils/initValidateMiddleware.js");
// router.post("/registration",(req,res)=>{
//   console.log(req.body)
// })I

Object.entries(apiApp).map(([key, value]) => {
  try {
    value.data.map((value) => {
      const {
        validationMiddlewareRules,
        validationMiddleware,
      } = initValidateMiddleware(`${value.method}Middleware`, taskMiddlewares);
      router[`${value.method}` || "get"](
        `${value.url}`,
        validationMiddlewareRules,
        validationMiddleware,
        passport.authenticate("jwt"),
        async (req, res) => {
          // Create validator of req types of parmas.
          // On first then me need check all types of request paramether see prem. , and if type of ->
          // this paramethers have error return error promise, then this error will intercept the handler in chain promises
          return Promise.resolve()
            .then(() => {
              return tasksControllers[`${value.controller}Task`](req, res);
            })
            .then((response) => {
              res.status(200).json(response);
            })
            .catch((error) => {
              res
                .status(error.status || 400)
                .json({ error, message: error.message });
            });
        }
      );
    });
  } catch (error) {
    console.log(error);
    // throw new createError({
    //   name: errorNames.NOT_ALLOWED,
    //   status: 400,
    //   message: error,
    // });
  }
});

module.exports = router;
// module.exports = {initRouter,router};
