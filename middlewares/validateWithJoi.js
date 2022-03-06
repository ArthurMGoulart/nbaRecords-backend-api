const { errorStatus } = require('../schemas/errorStatus');

const validateWithJoy = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorType = error.details[0].type;
    return res.status(errorStatus[errorType]).send({ error: error.message });
  }
  return next();
};

module.exports = {
  validateWithJoy,
};
