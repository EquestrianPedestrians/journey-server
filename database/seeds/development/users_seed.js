
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {// Inserts seed entries
      return knex('users').insert({
        name: 'JJ Rosenquist',
        email: 'jj@email.com'
      });
    }).then(function () {// Inserts seed entries
      return knex('users').insert({
        name: 'Emma Rios',
        email: 'emma@email.com'
      });
    }).then(function () {// Inserts seed entries
      return knex('users').insert({
        name: 'Vandeth Nop',
        email: 'vandeth@email.com'
      });
    }).then(function () {// Inserts seed entries
      return knex('users').insert({
        name: 'Danya Smith',
        email: 'danya@email.com'
      });
    });
};