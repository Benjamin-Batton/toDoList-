const { check, validationResult } = require("express-validator");
const errorNames = require("../../../frontEnd/src/const/_const.js");
const createError = require("../../../frontEnd/src/utils/createError.js");

const validationRules = () => [
  check("email", "Incorrect email").isEmail(),
  check("password", "Password will be more than six symbols").isLength({
    min: 6,
    max: 32,
  }),
];

const validMiddleware = (req, res, next) => {
  try {
    const errors = validationResult(req);;
    if (!errors.isEmpty()) {
      throw new createError({
        name: errorNames.INCORRECT_VALUES,
        status: 400,
        message: errors.array()[0].msg,
      });
    }
    return next();
  } catch (error) {
    res.status(error.status || 400).json({ error, message: error.message });
  }
};

module.exports = { validationRules, validMiddleware };
