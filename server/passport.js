const passport = require("passport");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const localStrategy = require("./services/localStrategy.js");
const jwtStrategy = require("./services/jwtStrategy.js");

passport.use(localStrategy.Strategy());
passport.serializeUser(localStrategy.serializeUser);
passport.deserializeUser(localStrategy.deserializeUser);
passport.use(jwtStrategy());

module.exports = passport;
