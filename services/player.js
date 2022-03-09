const axios = require('axios').default;
const { Player, UserPlayer, User } = require('../models');

const getAll = async () => {
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: { page: '0', per_page: '25' },
    headers: {
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': 'b4c416d082msh0e3ba278423d1dep125df9jsn0e832bf85e59',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

const getById = async (id) => {
  const options = {
    method: 'GET',
    url: `https://free-nba.p.rapidapi.com/players/${id}`,
    headers: {
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': 'b4c416d082msh0e3ba278423d1dep125df9jsn0e832bf85e59',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

const getPlayersByIds = (players) => {
  const playersApi = Promise.all(players.map(async (player) => {
    const { dataValues: { idApi } } = player;
    const playerApi = await getById(idApi);
    return playerApi;
  }));
  return playersApi;
};

const associatePlayer = async (idParams, user) => {
  const { dataValues: { userId } } = user;
  const player = await getById(idParams);
  const { id } = player;
  const idApi = id;
  const newPlayer = await Player.create({ idApi });
  const { playerId } = newPlayer.dataValues;
  // Using camel case keys sequelize didn't got the values
  const userPlayerObj = {
    player_id: playerId,
    user_id: userId,
  };
  await UserPlayer.create(userPlayerObj);
};

const getPlayersByUser = async (userId) => {
  const playersId = await Player.findAll({
    attributes: ['idApi'],
    include: [
      {
        model: User,
        as: 'users',
        where: { user_id: userId },
        attributes: [],
        through: { attributes: [] },
      },
    ],
  });
  const players = getPlayersByIds(playersId);
  return players;
};

module.exports = {
  getAll,
  getById,
  associatePlayer,
  getPlayersByUser,
};
