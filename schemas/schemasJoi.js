const Joi = require('joi');

const signUpSchema = Joi.object({
  name: Joi.string().min(3).max(30).required()
    .messages({
      'string.base': 'Name must be a string',
      'string.min': 'Name must be longer than 3 characteres',
      'string.max': 'Name must be shorter than 30 characteres',
      'ani.required': 'Name is required',
    }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 6 characteres',
    'any.required': 'Password is required',
  }),
});

const loginSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.base': 'Name must be a string',
      'ani.required': 'Name is required',
    }),
  password: Joi.string().required().messages({
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});

module.exports = {
  signUpSchema,
  loginSchema,
};
