module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      playerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'player_id',
      },
      idApi: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'id_api',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Players');
  },
};
