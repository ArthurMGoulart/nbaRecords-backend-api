module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'name',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  },
};
