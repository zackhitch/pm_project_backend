exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments();

    tbl.string('first_name', 128);

    tbl.string('last_name', 128);

    tbl
      .string('email_address', 128)
      .notNullable()
      .unique();

    tbl
      .integer('home_location')
      .unsigned()
      .references('id')
      .inTable('locations');

    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
