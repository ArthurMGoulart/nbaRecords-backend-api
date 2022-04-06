const status = require('http-status');

const errorStatus = {
  'user.duplicated': status.BAD_REQUEST,
  'user.notFound': status.NOT_FOUND,
  'password.notMatched': status.UNAUTHORIZED,
  'any.required': status.BAD_REQUEST,
  'string.empty': status.BAD_REQUEST,
  'string.min': status.UNPROCESSABLE_ENTITY,
  'string.base': status.UNPROCESSABLE_ENTITY,
  'number.empty': status.BAD_REQUEST,
  'number.min': status.UNPROCESSABLE_ENTITY,
  'number.base': status.UNPROCESSABLE_ENTITY,
  'number.positive': status.UNPROCESSABLE_ENTITY,
  'array.empty': status.BAD_REQUEST,
  'array.min': status.UNPROCESSABLE_ENTITY,
  'array.base': status.UNPROCESSABLE_ENTITY,
};

module.exports = {
  errorStatus,
};
