const passport = require("passport");
const createError = require("../../frontEnd/src/utils/createError.js");
const errorNames = require("../../frontEnd/src/const/_const.js");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../models/User.js");
const bcrypt = require("bcryptjs");

const Strategy = () =>
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({
          email: email,
        }).exec();
        if (!user) {
          return done("User with this data does not match", false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        }
        return done("User with this data does not match", false);
      } catch (error) {
        return done(error, false);
      }
    }
  );

const serializeUser = async (user, done) => {
  try {
    done(null, user.id);
  } catch (error) {
    done(error, false);
  }
};
const deserializeUser = async (id, done) => {
  try {
    const user = await userModel.findById(id);
    if (user) {
      done(null, user);
    }
    done(null, false);
  } catch (error) {
    done(error, false);
  }
};

module.exports = { Strategy, serializeUser, deserializeUser };
