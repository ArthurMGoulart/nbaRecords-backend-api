const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { playerController } = require('../controllers');

const userRouter = express.Router();

userRouter.get('/players', validateJWT, playerController.getPlayersByUser);

userRouter.post('/:id', validateJWT, playerController.associatePlayer);

module.exports = {
  userRouter,
};
