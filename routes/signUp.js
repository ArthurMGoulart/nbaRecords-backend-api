const express = require('express');
const { validateWithJoy } = require('../middlewares/validateWithJoi');
const { signupSchema } = require('../schemas/schemasJoi');
const userController = require('../controllers/user');

const signUpRouter = express.Router();

signUpRouter.post('/', validateWithJoy(signupSchema), userController.signUp);

module.exports = {
  signUpRouter,
};
