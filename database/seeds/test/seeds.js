const users = require('../../data/users');
const trips = require('../../data/trips');
const destinations = require('../../data/destinations');
const weather = require('../../data/weather');


exports.seed = function(knex, Promise) {
  return knex('weather').del()
  .then(() => {
  return knex('destinations').del()
  })
  .then(() => {
  return knex('trips').del()  
  })
  .then(() => {
    return knex('users').del()
  })
  .then(() => {
    return knex('users').insert(users)
  })
  .then(() => {
    return knex('trips').insert(trips)
  })
  .then(() => {
    return knex('destinations').insert(destinations)
  })
  .then(() => {
    return knex('weather').insert(weather)
  })

}