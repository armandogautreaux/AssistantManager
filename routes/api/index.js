const router = require('express').Router();
const filesRoutes = require('./files');
const usersRoutes = require('./users');

//User Routes
router.use('/files', filesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
