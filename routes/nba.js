const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');

const nbaRouter = express.Router();
const { nbaController } = require('../controllers');

nbaRouter.get('/', validateJWT, nbaController.getAll);

nbaRouter.get('/:id', validateJWT, nbaController.getById);

module.exports = {
  nbaRouter,
};
