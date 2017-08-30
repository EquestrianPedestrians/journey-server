
exports.up = function(knex, Promise) {
  return knex.schema.createTable('destinations', function(table) {
    table.increments();
    table.integer('tripId').references('id').inTable('users').notNull().onDelete('cascade');
    table.string('city').notNullable();
    table.date('arrival').unique();
    table.integer('tripLength');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('destinations').dropTable('trips').dropTable('users');

};
