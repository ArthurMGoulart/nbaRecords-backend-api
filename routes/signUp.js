const express = require('express');
const { validateWithJoy } = require('../middlewares/validateWithJoi');
const { signUpSchema } = require('../schemas/schemasJoi');
const { userController } = require('../controllers');

const signUpRouter = express.Router();

signUpRouter.post('/', validateWithJoy(signUpSchema), userController.signUp);

module.exports = {
  signUpRouter,
};
