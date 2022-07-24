const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartoonController.js');


router.get("/cartoons", controller.findAllCartoons)
router.get("/cartoon/title", controller.findCartoonByTitle)
router.get("/cartoons/age", controller.findCartoonByAge)
router.get("/cartoon/:id", controller.findCartoonById)
router.post("/cartoons/registration", controller.newCartoon)
router.patch("/cartoon/update/:id", controller.updateCartoonById)
router.delete("/cartoon/delete/:id", controller.deleteCartoonById)


module.exports = router