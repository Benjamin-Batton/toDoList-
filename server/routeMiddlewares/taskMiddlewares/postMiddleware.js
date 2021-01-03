const { check, validationResult } = require("express-validator");

const validationRules = () => [
  check("task", "Password will be more then six symbols").trim().isLength({
    min: 1,
    max: 410,
  }),
];

const validMiddleware = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send("Incorrect values");
    }
    return next();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { validationRules, validMiddleware };
