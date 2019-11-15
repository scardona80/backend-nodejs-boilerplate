// Your routes
const serverRoutes = require('express').Router();

//Example call to a route file
serverRoutes.use('/users', require('./usersRoutes'));

module.exports = serverRoutes;
