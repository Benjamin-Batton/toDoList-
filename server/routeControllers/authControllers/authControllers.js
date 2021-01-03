const createError = require("../../../frontEnd/src/utils/createError.js");
const errorNames = require("../../../frontEnd/src/const/_const.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mailer = require("../../serverUtils/nodemailer.js");
const userModel = require("../../models/User.js");

class authControllers {
  async login(req, res) {
    try {
      const user = req.user;
      if (!user.confirmed) {
        throw new createError({
          name: errorNames.INCORRECT_VALUES,
          status: 400,
          message: "Confirm your account in mail post",
        });
      }
      let token = jwt.sign(
        { userId: user.id },
        process.env.SECRET_KEY || "fd?2??7)!!FdDD",
        {
          expiresIn: "15d",
        }
      );
      token = {
        message: "success",
        data: {
          token,
          userId: user.id,
        },
      };
      return token;
    } catch (error) {
      throw new createError({
        name: errorNames.INCORRECT_VALUES,
        status: 400,
        message: error,
      });
    }
  }
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      // userModel.findOne({ email }, async (error, res) => {
      //   try {
      //     console.log("error in find user", error);
      //     if (error) {
      //       throw new createError({
      //         name: errorNames.INCORRECT_VALUES,
      //         status: 400,
      //         message: error,
      //       });
      //     } else {
      //       throw new createError({
      //         name: errorNames.INCORRECT_VALUES,
      //         status: 400,
      //         message: "User with this data has been created some times ago",
      //       });
      //     }
      //   } catch (error) {
      //     throw new createError({
      //       name: errorNames.INCORRECT_VALUES,
      //       status: 400,
      //       message: error,
      //     });
      //   }
      // });
      const findUser = await userModel.findOne({ email }).exec();
      if (findUser) {
        throw new createError({
          name: errorNames.INCORRECT_VALUES,
          status: 400,
          message: "User with this data has been created some times ago",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const confirmHash = await bcrypt.hash(
        process.env.MAILER_SECRET_KEY || "VJWY,O~C9?&Xx",
        10
      );

      const data = {
        email,
        password: hashedPassword,
        confirmed: false,
        confirmHash,
      };
      await userModel.create(data);

      const mailOptions = {
        from: "toDoApp@gmail.com",
        to: email,
        subject: "Confirm your registration on website toDoApp by Archi",
        html: `To confirm your mail click on this button <a href="http:localhost:${
          process.env.FRONT_PORT || 8083
        }/auth/verify?hash=${confirmHash}">Click this button</a>`,
      };
      mailer(mailOptions, async (error) => {
        try {
          if (error) {
            throw new createError({
              name: errorNames.NOT_ALLOWED,
              status: 400,
              message: error,
            });
          }
        } catch (error) {
          throw new createError({
            name: errorNames.NOT_ALLOWED,
            status: 400,
            message: error,
          });
        }
      });
      return {
        message: "Confirm Your Email",
      };
    } catch (error) {
      throw new createError({
        name: errorNames.INCORRECT_VALUES,
        status: 400,
        message: error,
      });
    }
  }
  async verify(req, res) {
    try {
      const hash = req.query.hash;
      if (!hash) {
        throw new createError({
          name: errorNames.INCORRECT_VALUES,
          status: 400,
          message: "REGISTRATION ERROR",
        });
      }
      const user = await userModel.findOne({ confirmHash: hash });
      if (user) {
        user.confirmed = true;
        user.save();
        return {
          message: "success",
        };
      } else {
        throw new createError(
          errorNames.INCORRECT_VALUES,
          400,
          "REGISTRATION ERROR"
        );
      }
    } catch (error) {
      throw new createError({
        name: errorNames.INCORRECT_VALUES,
        status: 400,
        message: error,
      });
    }
  }
}

module.exports = new authControllers();
