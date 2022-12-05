const express = require("express");
const pokemonController = require("../controller/pokemonController");
const pokemonListController = require("../controller/pokemonListController");
const updateListController = require("../controller/updateListController");
const router = express.Router();

router.post("/addlist", pokemonController.createList);
router.get(`/information/`, pokemonListController.getPokemon);
router.get(`/information/:id`, pokemonListController.getPokemonById);
router.get(`/information/delete/:id`, pokemonListController.deletePokemon);
router.patch(`/information/edit/:id`, updateListController.updatePokemon);

module.exports = router;
