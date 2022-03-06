const express = require('express');
const playerController = require('../controllers/player');

const playerRouter = express.Router();

playerRouter.get('/', playerController.getAll);

module.exports = {
  playerRouter,
};
