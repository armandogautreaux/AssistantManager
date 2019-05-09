const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const JWTStrategy = require('./jwtStrategy');
const User = require('../models/User');

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById({ _id: id }).then(user => {
    cb(null, user);
  });
});

passport.use(LocalStrategy);
passport.use(JWTStrategy);

module.exports = passport;
