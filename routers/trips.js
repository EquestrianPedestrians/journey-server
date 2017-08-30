const router = require('express').Router();
const TripsController = require('../controllers/tripsController.js');


//  GET all trips
router.get('/all', TripsController.getAllTrips)

//  GET specific trip
router.get('/trip', TripsController.getTrip)

//  POST new trip
router.post('/create', TripsController.createTrip)


module.exports = router;