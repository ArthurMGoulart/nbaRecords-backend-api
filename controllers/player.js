const PlayerService = require('../services/player');

const getAll = async (req, res) => {
  try {
    const players = await PlayerService.getAll();
    return res.status(200).json(players);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

module.exports = {
  getAll,
};
