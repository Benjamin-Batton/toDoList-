const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const UserModel = require("../models/User.js")
const jwtStrategy = () => {
  return new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY || "fd?2??7)!!FdDD",
      // jwtFromRequest: ExtractJWT.fromHeader("authorization"),
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      UserModel.findById(token.userId, (err, user)=>{
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            
        }
    });
    }
  );
};

module.exports = jwtStrategy;
