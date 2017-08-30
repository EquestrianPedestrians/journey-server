const router = require('express').Router();
const UsersController = require('../controllers/usersController.js');


//  GET all users
router.get('/all', UsersController.getAllUsers)

//  GET current user id:
router.get('/id', UsersController.getUserId)

//  POST user
router.post('/add', UsersController.addUser)

module.exports = router;