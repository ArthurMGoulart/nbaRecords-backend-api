function CustomException(code, message) {
  const error = new Error(message);

  error.code = code;
  return error;
}

CustomException.prototype = Object.create(Error.prototype);

module.exports = {
  CustomException,
};
