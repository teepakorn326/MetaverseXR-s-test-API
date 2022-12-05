module.exports = (sequelize, DataTypes) => {
  const PokemonWeakness = sequelize.define(
    "PokemonWeakness",
    {},
    { underscored: true }
  );
  return PokemonWeakness;
};
