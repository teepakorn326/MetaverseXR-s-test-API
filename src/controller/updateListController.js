const AppError = require("../utils/appError");
const {
  Evolution,
  Multiplier,
  Pokemon,
  Type,
  PokemonType,
  PokemonWeakness,
} = require("../models");

exports.updatePokemon = async (req, res, next) => {
  try {
    const pokemonList = req.body;
    const { id } = req.params;

    const updatePokemon = {};
    if (pokemonList.name) {
      updatePokemon.name = pokemonList.name;
    }
    if (pokemonList.img) {
      updatePokemon.img = pokemonList.img;
    }
    if (pokemonList.type) {
      updatePokemon.type = pokemonList.type;
    }
    if (pokemonList.height) {
      updatePokemon.height = pokemonList.height;
    }
    if (pokemonList.height) {
      updatePokemon.height = pokemonList.height;
    }
    if (pokemonList.weight) {
      updatePokemon.weight = pokemonList.weight;
    }
    if (pokemonList.candy) {
      updatePokemon.candy = pokemonList.candy;
    }
    if (pokemonList.egg) {
      updatePokemon.egg = pokemonList.egg;
    }
    if (pokemonList.multipliers) {
      updatePokemon.multipliers = pokemonList.multipliers;
    }
    if (pokemonList.weaknesses) {
      updatePokemon.weaknesses = pokemonList.weaknesses;
    }
    if (pokemonList.candy_count) {
      updatePokemon.candyCount = pokemonList.candy_count;
    }
    if (pokemonList.spawn_chance) {
      updatePokemon.spawnChance = pokemonList.spawn_chance;
    }
    if (pokemonList.avg_spawns) {
      updatePokemon.avgSpawns = pokemonList.avg_spawns;
    }
    if (pokemonList.spawn_time) {
      updatePokemon.spawnTime = pokemonList.spawn_time;
    }
    if (pokemonList.next_evolution) {
      updatePokemon.nextEvolution = pokemonList.next_evolution;
    }
    if (pokemonList.prev_evolution) {
      updatePokemon.prevEvolution = pokemonList.prev_evolution;
    }
    console.log("updatePokemon", updatePokemon);

    const newPokemonData = await Pokemon.update(
      {
        name: pokemonList.name,
        img: pokemonList.img,
        type: pokemonList.type,
        height: pokemonList.height,
        weight: pokemonList.weight,
        candy: pokemonList.candy,
        egg: pokemonList.egg,
        multipliers: pokemonList.multipliers || null,
        weaknesses: pokemonList.weaknesses,
        spawnChance: pokemonList.spawn_chance,
        avgSpawns: pokemonList.avg_spawns,
        spawnTime: pokemonList.spawn_time,
      },
      { where: { id: id } }
    );
    console.log(newPokemonData);
    res
      .status(200)
      .json({ message: `edit pokemons data successfully`, newPokemonData });
  } catch (err) {
    console.log("err", err);
    next(err);
  }
};
