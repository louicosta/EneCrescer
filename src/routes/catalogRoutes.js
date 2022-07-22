const express = require('express');
const router = express.Router();
const controller = require('../controllers/catalogController.js');


router.get("/catalog", controller.findAllCatalog)


module.exports = router;