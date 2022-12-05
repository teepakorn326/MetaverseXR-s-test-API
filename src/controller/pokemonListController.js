const AppError = require("../utils/appError");
const {
  Evolution,
  Multiplier,
  Pokemon,
  Type,
  PokemonType,
  PokemonWeakness,
} = require("../models");

exports.getPokemon = async (req, res, next) => {
  try {
    const { limit } = req.query;

    const allData = await Pokemon.findAll({
      limit: +limit,

      include: [
        {
          model: Evolution,
          as: "State Evo",
          include: [
            { model: Pokemon, as: "Next Evo" },
            { model: Pokemon, as: "Previous Evo" },
          ],
        },

        { model: Multiplier },
        { model: Type, as: "Pokemon type" },
        { model: Type, as: "Pokemon weakness" },
      ],
    });
    res
      .status(201)
      .json({ message: `get ${limit}  pokemons data successfully`, allData });
  } catch (err) {
    console.log("err", err);
    next(err);
  }
};

exports.getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const Data = await Pokemon.findOne({
      where: { id },
      include: [
        {
          model: Evolution,
          as: "State Evo",
          include: [
            { model: Pokemon, as: "Next Evo" },
            { model: Pokemon, as: "Previous Evo" },
          ],
        },

        { model: Multiplier },
        { model: Type, as: "Pokemon type" },
        { model: Type, as: "Pokemon weakness" },
      ],
    });
    res.status(201).json({ message: "get pokemon data successfully", Data });
  } catch (err) {
    console.log("err", err);
    next(err);
  }
};
exports.deletePokemon = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pokemonData = await Pokemon.findOne({
      where: { id },
    });

    if (!pokemonData) {
      throw new AppError("no pokemon in database", 400);
    }
    await pokemonData.destroy();
    res.status(201).json({ message: "delete pokemon data successfully" });
  } catch (err) {
    console.log("err", err);
    next(err);
  }
};
