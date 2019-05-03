const User = require('../models/User');
const passport = require('../passport');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  register: (req, res) => {
    console.log('user signup');

    const { email, password, name } = req.body;
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${email}`
        });
      } else {
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
          name: name,
          email: email,
          password: hash
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    });
  },
  login: (req, res) => {
    const secret = process.env.SECRET_OR_KEY;
    passport.authenticate('local', { session: false }, (error, user) => {
      if (error || !user) {
        res.status(400).json({ error });
      }
      const payload = {
        username: user._id
      };

      /** assigns payload to req.user */
      req.login(payload, { session: false }, error => {
        // console.log(payload);
        if (error) {
          res.status(400).send({ error });
        }
        /** generate a signed json web token and return it in the response */
        //Sign Token
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: 7200 },
          (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );

        const token = jwt.sign(payload, secret, { expiresIn: 7200 });

        /** assign our jwt to the cookie */
        res.cookie('jwt', token, { httpOnly: true }).status(200);
      });
    })(req, res);
  }
};
