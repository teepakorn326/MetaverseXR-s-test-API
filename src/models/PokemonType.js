module.exports = (sequelize, DataTypes) => {
  const PokemonType = sequelize.define(
    "PokemonType",
    {},
    { underscored: true }
  );
  return PokemonType;
};
