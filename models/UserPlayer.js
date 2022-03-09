module.exports = (sequelize) => {
  const UserPlayer = sequelize.define(
    'UserPlayer',
    {},
    {
      tableName: 'UserPlayers',
      timestamps: false,
    },
  );

  UserPlayer.associate = (models) => {
    models.Player.belongsToMany(models.User, {
      as: 'users',
      through: UserPlayer,
      foreignKey: 'player_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Player, {
      as: 'players',
      through: UserPlayer,
      foreignKey: 'user_id',
      otherKey: 'player_id',
    });
  };

  return UserPlayer;
};
