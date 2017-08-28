
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(table){
    table.increments();
    table.integer('userId').references('id').inTable('users').notNull().onDelete('cascade');
    table.string('title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').dropTable('trips');
};
