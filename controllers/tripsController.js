const knex = require('../knex.js');

module.exports = {
  getAllTrips: (req, res) => {
    return knex('trips').select('*')
    .then((trips) => {
      res.status(200).json({
        status: 'success',
        data: trips
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  getTrip: (req, res) => {
    let query = req.query.title
    return knex('trips').where('title', query).select('*')
    .then((trips) => {
      res.status(200).json({
        status: 'success',
        user: trips[0]
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  createTrip: (req, res) => {
    return knex('trips').insert(req.body)
    .then(() => {
      res.json({
        status: 'success',
        data: 'Trip Added!'
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