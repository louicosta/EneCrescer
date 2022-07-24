const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieController.js');


router.get("/movies", controller.findAllMovies)
router.get("/movie/title", controller.findMovieByTitle)
router.get("/movie/age", controller.findMovieByAge)
router.get("/movie/:id", controller.findMovieById)
router.post("/movies/registration", controller.newMovie)
router.patch("/movie/update/:id", controller.updateMovieById)
router.delete("/movie/delete/:id", controller.deleteMovieById)


module.exports = router