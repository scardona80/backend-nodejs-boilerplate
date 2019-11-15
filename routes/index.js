// Your routes
const serverRoutes = require('express').Router();

//Example call to a route file. Here must be called the another route files
serverRoutes.use('/users', require('./usersRoutes'));

module.exports = serverRoutes;
