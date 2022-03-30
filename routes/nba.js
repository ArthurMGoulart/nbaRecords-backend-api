const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');

const nbaRouter = express.Router();
const { playerController } = require('../controllers');

nbaRouter.get('/', validateJWT, playerController.getAll);

nbaRouter.get('/:id', validateJWT, playerController.getById);

module.exports = {
  nbaRouter,
};
