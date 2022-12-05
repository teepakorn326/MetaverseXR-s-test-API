module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      title: {
        type: DataTypes.ENUM(
          "Poison",
          "Flying",
          "Ground",
          "Grass",
          "Fighting",
          "Psychic",
          "Ice",
          "Fire",
          "Rock",
          "Electric",
          "Bug",
          "Ghost",
          "Dark",
          "Fairy",
          "Steel",
          "Dragon",
          "Water",
          "Normal"
        ),
        allowNull: true,
      },
    },
    { underscored: true }
  );
  Type.associate = (db) => {
    Type.belongsToMany(db.Pokemon, {
      through: db.PokemonType,
      as: "Pokemon type",
      foreignKey: "typeId",
    });
    Type.belongsToMany(db.Pokemon, {
      through: db.PokemonWeakness,
      as: "Pokemon weakness",
      foreignKey: "weaknessId",
    });
  };
  return Type;
};
