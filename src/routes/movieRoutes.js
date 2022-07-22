const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieController.js');


/* router.get("/movies", controller.findAllMovies)
router.get("/movie/:id", controller.findMovieById)
router.get("/movie/:title", controller.findMovieByTitle)*/
//router.get("/movie/:ageRating", controller.findMovieByAge) // Ainda não sei como criar o código
/*router.patch("/movie/update/:id", controller.updateMovie)
//router.patch("/movie/favorite/:title", controller.changeMovie) // Ainda não sei como criar o código
router.delete("/movie/delete/:id", controller.deleteMovie)
 */

module.exports = router