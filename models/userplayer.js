module.exports = (sequelize) => {
  const UserPlayer = sequelize.define(
    'UserPlayer',
    {},
    { timestamps: false },
  );

  UserPlayer.associate = (models) => {
    models.Player.belongsToMany(models.User, {
      as: 'users',
      through: UserPlayer,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.User.belongsToMany(models.Player, {
      as: 'players',
      through: UserPlayer,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return UserPlayer;
};
