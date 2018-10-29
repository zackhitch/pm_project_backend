exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function(tbl) {
    tbl.increments();

    tbl.string('city', 128).notNullable();

    tbl.string('state/province', 128);

    tbl.string('country', 128).notNullable();

    tbl.float('longitude', 256).notNullable();

    tbl.float('latitude', 256).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations');
};
