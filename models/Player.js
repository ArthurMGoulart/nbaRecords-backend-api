module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    'Player',
    {
      playerId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      idApi: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Players',
      underscored: true,
    },
  );

  return Player;
};
