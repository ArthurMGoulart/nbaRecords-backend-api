const express = require('express');
const { validateWithJoy } = require('../middlewares/validateWithJoi');
const { loginSchema } = require('../schemas/schemasJoi');
const { userController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', validateWithJoy(loginSchema), userController.login);

module.exports = {
  loginRouter,
};
