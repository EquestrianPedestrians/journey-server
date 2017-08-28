const knex = require('../knex.js');

module.exports = {
  getAllUsers: (req, res) => {
    return knex('users').select('*')
    .then((users) => {
      res.status(200).json({
        status: 'success',
        data: users
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