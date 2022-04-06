const status = require('http-status');
const { playerService } = require('../services');

const getAll = async (req, res) => {
  try {
    const players = await playerService.getAll();
    return res.status(status.OK).json(players);
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await playerService.getById(id);
    return res.status(status.OK).json(player);
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

const associatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;
    await playerService.associatePlayer(id, user);
    return res.status(status.OK).send('Associated!');
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

const getPlayersByUser = async (req, res) => {
  try {
    const { user: { dataValues: { userId } } } = res.locals;
    const players = await playerService.getPlayersByUser(userId);
    return res.status(status.OK).json(players);
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

module.exports = {
  getAll,
  getById,
  associatePlayer,
  getPlayersByUser,
};
