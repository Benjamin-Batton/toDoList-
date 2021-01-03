const passport = require("../passport.js");
const handlePassport = (app) => {
  app.use(passport.initialize());
};
module.exports = handlePassport;
