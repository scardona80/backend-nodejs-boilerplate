const router = require('express').Router();

//Here must be done the call to the service file with the heavy logic - Camilo 11/15/2019
const userService = require('../services/userService');
//Here must be done the call to the middleware file with the validations and other things - Camilo 11/15/2019
const {
  getMessageFromMiddleware
} = require('../utils/middlewares/testMiddleware');

/* GET ROUTES */
router.get('/create', getMessageFromMiddleware, userService.sayHiUser);

/* POST ROUTES */

/* PUT ROUTES */

/* DELETE ROUTES */

/* PATCH ROUTES */
