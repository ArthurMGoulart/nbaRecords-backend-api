const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const playerController = require('../controllers/player');

const playerRouter = express.Router();

playerRouter.get('/show', validateJWT, playerController.getPlayersByUser);

playerRouter.get('/', validateJWT, playerController.getAll);

playerRouter.get('/:id', validateJWT, playerController.getById);

playerRouter.post('/:id', validateJWT, playerController.associatePlayer);

module.exports = {
  playerRouter,
};
