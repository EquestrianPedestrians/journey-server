
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weather', function(table) {
    table.increments();
    table.integer('destinationId').references('id').inTable('destinations').notNullable().onDelete('cascade');
    table.date('date').references('arrival').inTable('destinations').notNullable().onDelete('cascade');
    table.string('weather');
    table.string('temp');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weather').dropTable('destinations').dropTable('trips').dropTable('users');
};
