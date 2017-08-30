const router = require('express').Router();
const WeatherController = require('../controllers/weatherController.js');


//  GET all weather
router.get('/all', WeatherController.getAllWeather)

//  GET current weather
router.get('/day', WeatherController.getDayWeather)

//  GET all weather for city

//  POST weather
router.post('/add', WeatherController.addDayWeather)

module.exports = router;