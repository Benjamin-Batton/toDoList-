const { check, validationResult } = require("express-validator");
const errorNames = require("../../../frontEnd/src/const/_const.js");
const createError = require("../../../frontEnd/src/utils/createError.js");

const validationRules = () => [
  check("email", "Incorrect email").isEmail(),
  check("password", "Password will be more than six symbols").isLength({
    min: 6,
    max: 32,
  }),
  check("confirmPassword", "Password and ConfirmPassword don't match")
    .trim()
    .isLength({
      min: 6,
      max: 32,
    })
    .custom(async (confirmPassword, { req }) => {
      try {
        const password = req.body.password;
        // If password and confirm password not same
        // don't allow to sign up and throw error
        if (password !== confirmPassword) {
          throw new createError({
            name: errorNames.INCORRECT_VALUES,
            status: 400,
            message: "Passwords must be same",
          });
        }
      } catch (error) {
        throw new createError({
          name: errorNames.INCORRECT_VALUES,
          status: 400,
          message: error,
        });
      }
    }),
];

const validMiddleware = (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new createError({
        name: errorNames.INCORRECT_VALUES,
        status: 400,
        message: error.array()[0].msg,
      });
    }
    return next();
  } catch (error) {
    res.status(error.status || 400).json({ error, message: error.message });
  }
};

module.exports = { validationRules, validMiddleware };
