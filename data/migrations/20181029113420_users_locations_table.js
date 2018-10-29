exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_locations', function(tbl) {
    tbl.increments();

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users');

    tbl
      .integer('location_id')
      .unsigned()
      .references('id')
      .inTable('locations');

    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_locations');
};
