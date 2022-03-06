const express = require('express');
const { validateWithJoy } = require('../middlewares/validateWithJoi');
const { userSchema } = require('../schemas/schemasJoi');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/', validateWithJoy(userSchema), userController.signUp);

module.exports = {
  userRouter,
};
