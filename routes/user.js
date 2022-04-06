const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { nbaController } = require('../controllers');

const userRouter = express.Router();

userRouter.get('/players', validateJWT, nbaController.getPlayersByUser);

userRouter.post('/:id', validateJWT, nbaController.associatePlayer);

module.exports = {
  userRouter,
};
