const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController.js');


router.get("/series", controller.findAllSeries)
router.get("/serie/:title", controller.findSerieByTitle)
router.get("/serie/:ageRating", controller.findSerieByAge)
router.get("/serie/:id", controller.findSerieById)
router.post("/series/create", controller.newSerie)
router.patch("/series/update/:id", controller.updateSeriesById)
router.delete("/serie/delete/:id", controller.deleteSeriesById)

module.exports = router