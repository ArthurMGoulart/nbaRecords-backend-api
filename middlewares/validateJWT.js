require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { userId: decoded.data.id } });
    res.locals.user = user;
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
