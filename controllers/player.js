const PlayerService = require('../services/player');

const getAll = async (req, res) => {
  try {
    const players = await PlayerService.getAll();
    return res.status(200).json(players);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await PlayerService.getById(id);
    return res.status(200).json(player);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const associatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = res.locals;
    await PlayerService.associatePlayer(id, user);
    return res.status(200).send('Associated!');
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const getPlayersByUser = async (req, res) => {
  try {
    const { user: { dataValues: { userId } } } = res.locals;
    const players = await PlayerService.getPlayersByUser(userId);
    return res.status(200).json(players);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports = {
  getAll,
  getById,
  associatePlayer,
  getPlayersByUser,
};
