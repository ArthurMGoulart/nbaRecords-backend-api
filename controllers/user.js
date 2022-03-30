const { userService } = require('../services');
const { errorStatus } = require('../schemas/errorStatus');

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    return res.status(200).json(token);
  } catch (e) {
    const { code, message } = e;
    return res.status(errorStatus[code]).json({ message });
  }
};

const signUp = async (req, res) => {
  try {
    const token = await userService.signUp(req.body);
    return res.status(201).json(token);
  } catch (e) {
    const { code, message } = e;
    return res.status(errorStatus[code]).json({ message });
  }
};

module.exports = {
  login,
  signUp,
};
