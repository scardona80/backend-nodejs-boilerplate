const userModel = require('../models/userModel');

const userService = {};

userService.sayHiUser = async (req, res, next) => {
  res.json({ data: 'This is a response from user service' });
  console.log(`Hi, i'm a user service function hehe`);
};

userService.getAllUsers = async (req, res, next) => {
  try {
    const databaseSearchResult = await userModel.findAll();
    res.status(200).json({ data: databaseSearchResult });
  } catch (error) {
    console.log(error);
  }
};
