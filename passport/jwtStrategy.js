const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET_OR_KEY;

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: secret
  },
  (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done('jwt expired');
    }

    return done(null, jwtPayload);
  }
);

module.exports = jwtStrategy;
