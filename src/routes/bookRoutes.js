const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');


router.get("/books", controller.findAllBooks)
router.get("/book/:title", controller.findBookByTitle)
router.get("/book/:id", controller.findBookById)
router.post("/books/registration", controller.newBook)
router.patch("/book/update/:id", controller.updateBookById)
router.delete("/book/delete/:id", controller.deleteBookById)


module.exports = router