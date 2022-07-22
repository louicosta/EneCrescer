const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController.js');

/* 
router.get("/series", controller.findAllSeries)
router.get("/serie/:id", controller.findSerieById)
router.get("/serie/:title", controller.findSerieByTitle)
//router.get("/serie/:ageRating", controller.findSerieByAge) // Ainda não sei como criar o código
router.post("/series/create", controller.newSerie)
router.patch("/series/update/:id", controller.updateSeriesById)
//router.patch("/serie/favorite/:title", controller.changeSeries) // Ainda não sei como criar o código
router.delete("/serie/delete/:id", controller.deleteSeriesById)
 */

module.exports = router