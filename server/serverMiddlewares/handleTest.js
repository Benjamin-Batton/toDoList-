const errorNames = require("../../frontEnd/src/const/_const.js");
const createError = require("../../frontEnd/src/utils/createError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const handleTest = async (app) => {
  try {
    app.use(passport.initialize());
    passport.use(
      {
        usernameField: "email",
        passwordField: "password",
      },
      new LocalStrategy(async (req, email, password, done) => {
        try {
          console.log(email);
          const user = await UserModel.findOne({
            email: email,
          }).exec();
          if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false);
          }
          return done(null, false);
        } catch (error) {
          return done(error, false);
        }
      })
    );
    
    app.post(
      `/auth/login`,
      passport.authenticate("local", { session: false }),
      async (req, res) => {
        try {
          const user = req.user;
          let token = jwt.sign(
            { userId: user.id },
            process.env.SECRET_KEY || "fd?2??7)!!FdDD",
            {
              expiresIn: "15d",
            }
          );
          token = {
            status: "success",
            data: {
              token,
              userId: user.id,
            },
          };
          console.log(token);
          res.send(token);
        } catch (error) {
          throw new Error(error);
        }
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = handleTest;
