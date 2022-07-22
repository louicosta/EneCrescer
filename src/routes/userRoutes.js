const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController.js');

router.post('/registration/', controller.newUser)
router.get('/search/', controller.getAllUsers)
router.delete('/delete/:id', controller.deleteUser)
//router.patch('favorite/:id', controller.favorite)
router.post('/login/', controller.login)


module.exports = router