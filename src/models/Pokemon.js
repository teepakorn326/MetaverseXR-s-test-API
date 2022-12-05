module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define(
    "Pokemon",
    {
      num: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      candy: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      egg: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      candyCount: {
        type: DataTypes.INTEGER,
        allowNull: true,

        validate: {
          notEmpty: true,
        },
      },
      spawnChance: {
        type: DataTypes.DOUBLE,
        allowNull: true,

        validate: {
          notEmpty: true,
        },
      },
      avgSpawns: {
        type: DataTypes.DOUBLE,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
      spawnTime: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  Pokemon.associate = (db) => {
    Pokemon.belongsToMany(db.Type, {
      through: db.PokemonType,
      as: "Pokemon type",
      foreignKey: "pokemonId",
    });
    Pokemon.belongsToMany(db.Type, {
      through: db.PokemonWeakness,
      as: "Pokemon weakness",
      foreignKey: "pokemonId",
    });
    Pokemon.hasMany(db.Evolution, {
      as: "Previous Evo",
      foreignKey: "prevId",
    });
    Pokemon.hasMany(db.Evolution, {
      as: "Next Evo",
      foreignKey: "nextId",
    });
    Pokemon.hasMany(db.Evolution, {
      as: "State Evo",
      foreignKey: "stateId",
    });
    Pokemon.hasMany(db.Multiplier, {
      foreignKey: "pokemonId",
    });
  };
  return Pokemon;
};
