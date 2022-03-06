module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPlayers', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      playerId: {
        type: Sequelize.INTEGER,
        field: 'player_id',
        references: {
          model: 'Players',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('UserPlayers');
  },
};
