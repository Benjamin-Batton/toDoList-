const chalk = require("chalk");
const initValidateMiddleware = (routeName, middlewares) => {
  const next = (req, res, next) => next();
  const validationMiddlewareRules = middlewares[routeName]
    ? middlewares[routeName].validationRules()
    : next;
  const validationMiddleware = middlewares[routeName]
    ? middlewares[routeName].validMiddleware
    : next;

  return {
    validationMiddlewareRules,
    validationMiddleware,
    next,
  };
};

module.exports = initValidateMiddleware;
