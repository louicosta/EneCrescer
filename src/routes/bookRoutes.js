const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');


/* router.get("/books", controller.findAllBooks)
router.get("/book/:id", controller.findBookById)
router.get("/book/:title", controller.findBookByTitle)
router.post("/books/registration", controller.newBook)
router.patch("/book/update/:id", controller.updateBookById)
//router.patch("/book/favorite/:title", controller.changeBook) // Ainda não sei como criar o código
router.delete("/book/delete/:id", controller.deleteBookById) */


module.exports = router