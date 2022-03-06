const axios = require('axios').default;

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

module.exports = {
  getAll,
};
