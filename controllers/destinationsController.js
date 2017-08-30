const knex = require('../knex.js');

module.exports = {
  getAllDestinations: (req, res) => {
    return knex('destinations').select('*')
    .then((destinations) => {
      res.status(200).json({
        status: 'success',
        data: destinations
      });
    }) 
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  getDestination: (req, res) => {
    let query = req.query.city
    return knex('destinations').where('city', query).select('*')
    .then((destinations) => {
      res.status(200).json({
        status: 'success',
        user: destinations[0]
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  addDestination: (req, res) => {
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