const knex = require('../knex.js');

module.exports = {
  getAllWeather: (req, res) => {
    return knex('weather').select('*')
    .then((weather) => {
      res.status(200).json({
        status: 'success',
        data: weather
      });
    }) 
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  getDayWeather: (req, res) => {
    let city = req.query.city;
    let date = req.query.date
    const sub = knex('destinations').where({city: city}).select('id');
    return knex('weather').where({destinationId: sub}).andWhere({date: date}).select('*')
    .then((weather) => {
      res.status(200).json({
        status: 'success',
        user: weather
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  addDayWeather: (req, res) => {
    return knex('destinations').insert(req.body)
    .then(() => {
      res.json({
        status: 'success',
        data: 'City Added!'
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },

};