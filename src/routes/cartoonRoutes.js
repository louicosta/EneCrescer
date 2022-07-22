const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartoonController.js');


router.get("/cartoons", controller.findAllCartoons)
router.get("/cartoon/:id", controller.findCartoonById)
router.get("/cartoon/:title", controller.findCartoonByTitle)
router.get("/cartoos/:ageRating", controller.findCartoonByAge)
router.post("/cartoons/registration", controller.newCartoon)
router.patch("/cartoon/update/:id", controller.updateCartoonById)
//router.patch("/cartoon/favorite/:title", controller.changeCartoon) // Ainda não sei como criar o código
router.delete("/cartoon/delete/:id", controller.deleteCartoonById)


module.exports = router