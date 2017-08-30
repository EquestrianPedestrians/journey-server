const router = require('express').Router();
const DestinationsController = require('../controllers/destinationsController.js');


//  GET all destinations
router.get('/all', DestinationsController.getAllDestinations)

//  GET specific trip
router.get('/trip', DestinationsController.getDestination)

//  POST new destination
router.post('/create', DestinationsController.createDestination)


module.exports = router;