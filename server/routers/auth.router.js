const { Router } = require("express");
const errorNames = require("../../frontEnd/src/const/_const.js");
const createError = require("../../frontEnd/src/utils/createError.js");
const bcrypt = require("bcryptjs");
const passport = require("../passport.js");
const authMiddlewares = require("../routeMiddlewares/authMiddlewares/_authRouteMiddlewares.js");
const _ = require("lodash");
const apiAuth = require("../../frontEnd/src/api/routeApi/auth/_apiAuth.js");
const authControllers = require("../routeControllers/authControllers/authControllers.js");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = Router();
const User = require("../models/User");
const initValidateMiddleware = require("../serverUtils/initValidateMiddleware.js");
// router.post("/registration",(req,res)=>{
//   console.log(req.body)
// })

_.mapValues(apiAuth, async (route, authApiName) => {
  // when one controller use in more then one routes //   in add use route add isMainName? serarchController(): searchController;
  try {
    const Controller = authControllers[`${route.name}`];
    if (!Controller) {
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: `Controller ${route.name} is not created`,
      });
    }
    const method = route.method.toLowerCase();
    const {
      validationMiddlewareRules,
      validationMiddleware,
      next,
    } = initValidateMiddleware(`${route.name}Middleware`, authMiddlewares);

    const strategy = route.strategy
      ? (req, res, next) =>
          passport.authenticate(route.strategy)(req, res, next)
      : next;

    router[method || "get"](
      `${route.url}`,
      validationMiddlewareRules,
      validationMiddleware,
      strategy,
      async (req, res) => {
        // Create validator of req types.
        // On firt then me need check all types of request paramether see prem. , and if type of ->
        // this paramethers have error return error promise, then this error will intercept the handler in chain promises
        return Promise.resolve()
          .then(() => {
            return Controller(req);
          })
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((error) => {
            res
              .status(error.status || 400)
              .json({ error, message: error.message });
          });
      }
    );
  } catch (error) {
    throw new createError({
      name: errorNames.NOT_ALLOWED,
      status: 400,
      message: error,
    });
    // console.log(error);
  }
});

// _.mapValues(apiAuth, (route, authApiName) => {
//   // when one controller use in more then one routes //   in add use route add isMainName? serarchController(): searchController;

//   const Controller = authControllers[`${route.name}`];

//   const method = route.method.toLowerCase();
//   console.log(method);
//   router[method || "get"](
//     `${route.url}`,

//     (req, res) => {
//       // Create validator of req types.
//       // On firt then me need check all types of request paramether see prem. , and if type of ->
//       // this paramethers have error return error promise, then this error will intercept the handler in chain promises
//       return Promise.resolve()
//         .then(() => {
//           return loginController(req);
//         })
//         .then((data) => {
//           res.status(200).json(data);
//         })
//         .catch((err) => {
//           res.status(400 || err.status).json(err);
//         });
//     }
//   );
// });

module.exports = router;
