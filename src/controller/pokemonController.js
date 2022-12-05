const AppError = require("../utils/appError");
const {
  Evolution,
  Multiplier,
  Pokemon,
  Type,
  PokemonType,
  PokemonWeakness,
} = require("../models");
const { Op } = require("sequelize");

exports.createList = async (req, res, next) => {
  try {
    //
    const pokemonList = req.body;
    const cloneArr = [...pokemonList];

    const newArr = [];
    const typeArr = [];
    const weaknessArr = [];
    const multiplierArr = [];
    const evolutionArr = [];

    for (let i = 0; i < cloneArr.length; i++) {
      const object = cloneArr[i];
      object["candyCount"] = object["candy_count"];
      delete object["candy_count"];
      object["spawnChance"] = object["spawn_chance"];
      delete object["spawn_chance"];
      object["avgSpawns"] = object["avg_spawns"];
      delete object["avg_spawns"];
      object["spawnTime"] = object["spawn_time"];
      delete object["spawn_time"];
      const dataArr = newArr.unshift(object);

      for (j = 0; j < cloneArr[i].type.length; j++) {
        const allType = cloneArr[i].type[j];
        if (allType == "Poison") {
          id = 1;
        } else if (allType == "Flying") {
          id = 2;
        } else if (allType == "Ground") {
          id = 3;
        } else if (allType == "Grass") {
          id = 4;
        } else if (allType == "Fighting") {
          id = 5;
        } else if (allType == "Psychic") {
          id = 6;
        } else if (allType == "Ice") {
          id = 7;
        } else if (allType == "Fire") {
          id = 8;
        } else if (allType == "Rock") {
          id = 9;
        } else if (allType == "Electric") {
          id = 10;
        } else if (allType == "Bug") {
          id = 11;
        } else if (allType == "Ghost") {
          id = 12;
        } else if (allType == "Dark") {
          id = 13;
        } else if (allType == "Fairy") {
          id = 14;
        } else if (allType == "Steel") {
          id = 15;
        } else if (allType == "Dragon") {
          id = 16;
        } else if (allType == "Water") {
          id = 17;
        } else if (allType == "Normal") {
          id = 18;
        }

        const type = typeArr.unshift({
          pokemonId: cloneArr[i].id,
          title: allType,
          typeId: id,
        });
      }
      for (k = 0; k < cloneArr[i].weaknesses.length; k++) {
        const allWeakness = cloneArr[i].weaknesses[k];
        if (allWeakness == "Poison") {
          id = 1;
        } else if (allWeakness == "Flying") {
          id = 2;
        } else if (allWeakness == "Ground") {
          id = 3;
        } else if (allWeakness == "Grass") {
          id = 4;
        } else if (allWeakness == "Fighting") {
          id = 5;
        } else if (allWeakness == "Psychic") {
          id = 6;
        } else if (allWeakness == "Ice") {
          id = 7;
        } else if (allWeakness == "Fire") {
          id = 8;
        } else if (allWeakness == "Rock") {
          id = 9;
        } else if (allWeakness == "Electric") {
          id = 10;
        } else if (allWeakness == "Bug") {
          id = 11;
        } else if (allWeakness == "Ghost") {
          id = 12;
        } else if (allWeakness == "Dark") {
          id = 13;
        } else if (allWeakness == "Fairy") {
          id = 14;
        } else if (allWeakness == "Steel") {
          id = 15;
        } else if (allWeakness == "Dragon") {
          id = 16;
        } else if (allWeakness == "Water") {
          id = 17;
        } else if (allWeakness == "Normal") {
          id = 18;
        }

        const type = weaknessArr.unshift({
          pokemonId: cloneArr[i].id,
          title: allWeakness,
          weaknessId: id,
        });
      }
      if (!cloneArr[i].multipliers) {
        const type = multiplierArr.unshift({
          pokemonId: cloneArr[i].id,
          multiplierNumber: null,
        });
      } else {
        for (l = 0; l < cloneArr[i].multipliers.length; l++) {
          const allMultiplier = cloneArr[i].multipliers[l];

          const type = multiplierArr.unshift({
            pokemonId: cloneArr[i].id,
            multiplierNumber: allMultiplier,
          });
        }
      }

      if (cloneArr[i].prev_evolution && cloneArr[i].next_evolution) {
        for (m = 0; m < cloneArr[i].prev_evolution.length; m++) {
          const type = evolutionArr.unshift({
            prevId: +cloneArr[i].prev_evolution[m].num,
            stateId: cloneArr[i].id,
          });
        }
        for (n = 0; n < cloneArr[i].next_evolution.length; n++) {
          const type = evolutionArr.unshift({
            nextId: +cloneArr[i].next_evolution[n].num,
            stateId: cloneArr[i].id,
          });
        }
      }
      if (cloneArr[i].prev_evolution && !cloneArr[i].next_evolution) {
        for (m = 0; m < cloneArr[i].prev_evolution.length; m++) {
          const type = evolutionArr.unshift({
            prevId: +cloneArr[i].prev_evolution[m].num,
            stateId: cloneArr[i].id,
          });
        }
      }
      if (!cloneArr[i].prev_evolution && cloneArr[i].next_evolution) {
        for (m = 0; m < cloneArr[i].next_evolution.length; m++) {
          const type = evolutionArr.unshift({
            nextId: +cloneArr[i].next_evolution[m].num,
            stateId: cloneArr[i].id,
          });
        }
      }
    }

    const typeData = [
      { id: 1, title: "Poison" },
      { id: 2, title: "Flying" },
      { id: 3, title: "Ground" },
      { id: 4, title: "Grass" },
      { id: 5, title: "Fighting" },
      { id: 6, title: "Psychic" },
      { id: 7, title: "Ice" },
      { id: 8, title: "Fire" },
      { id: 9, title: "Rock" },
      { id: 10, title: "Electric" },
      { id: 11, title: "Bug" },
      { id: 12, title: "Ghost" },
      { id: 13, title: "Dark" },
      { id: 14, title: "Fairy" },
      { id: 15, title: "Steel" },
      { id: 16, title: "Dragon" },
      { id: 17, title: "Water" },
      { id: 18, title: "Normal" },
    ];

    const allType = await Type.bulkCreate(typeData);

    const pokemonData = await Pokemon.bulkCreate(newArr);

    const allTypeData = await PokemonType.bulkCreate(typeArr);
    const allWeaknessData = await PokemonWeakness.bulkCreate(weaknessArr);
    const allMultiplier = await Multiplier.bulkCreate(multiplierArr);
    const allEvolution = await Evolution.bulkCreate(evolutionArr);

    res.status(200).json({ message: "create pokemon list successfully " });
  } catch (err) {
    console.log("error", err);
    next(err);
  }
};
