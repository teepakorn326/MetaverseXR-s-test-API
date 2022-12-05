module.exports = (sequelize, DataTypes) => {
  const Evolution = sequelize.define("Evolution", {}, { underscored: true });
  Evolution.associate = (db) => {
    Evolution.belongsTo(db.Pokemon, {
      as: "Previous Evo",
      foreignKey: "prevId",
    });
    Evolution.belongsTo(db.Pokemon, {
      as: "Next Evo",
      foreignKey: "nextId",
    });
    Evolution.belongsTo(db.Pokemon, {
      as: "State Evo",
      foreignKey: "stateId",
    });
  };
  return Evolution;
};
