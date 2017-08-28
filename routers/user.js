const router = require('express').Router();
const UsersController = require('../controllers/usersController.js');


//  GET all users
router.get('/test', UsersController.getAllUsers)


module.exports = router;