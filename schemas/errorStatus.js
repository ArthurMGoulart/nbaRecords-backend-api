const errorStatus = {
  'user.duplicated': 400,
  'user.notFound': 404,
  'password.notMatched': 401,
  'any.required': 400,
  'string.empty': 400,
  'string.min': 422,
  'string.base': 422,
  'number.empty': 400,
  'number.min': 422,
  'number.base': 422,
  'number.positive': 422,
  'array.empty': 400,
  'array.min': 422,
  'array.base': 422,
};

module.exports = {
  errorStatus,
};