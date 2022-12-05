module.exports = (sequelize, DataTypes) => {
  const Multiplier = sequelize.define("Multiplier", {
    multiplierNumber: {
      type: DataTypes.DOUBLE,
    },
  });
  Multiplier.associate = (db) => {
    Multiplier.belongsTo(db.Pokemon, {
      foreignKey: "pokemonId",
    });
  };
  return Multiplier;
};
