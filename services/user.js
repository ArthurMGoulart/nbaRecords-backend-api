const { User } = require('../models');
const { CustomException } = require('../utils/CustomException');
const { generateToken } = require('../token/generateToken');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { userId: id } });
  if (!user) {
    throw new CustomException('user.notFound', 'User not Found');
  }
  return user;
};

const getByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const login = async (loginInfo) => {
  const { name, password } = loginInfo;
  const user = await getByName(name);
  const { dataValues: userId, password: userPassword } = user;
  if (!user) {
    throw new CustomException('user.notFound', 'User not Found');
  }
  if (userPassword !== password) {
    throw new CustomException('password.notMatched', 'Password not matched');
  }
  const token = generateToken(userId);
  return token;
};

const signUp = async (signUpInfo) => {
  const { name, password } = signUpInfo;
  if (await getByName(name)) {
    throw new CustomException('user.duplicated', 'Name already used');
  }
  const user = await User.create({ name, password });
  const token = generateToken(user.dataValues.id);
  return token;
};

const deleteMe = async (me) => {
  await me.destroy();
};

module.exports = {
  getAll,
  getById,
  login,
  signUp,
  deleteMe,
};
