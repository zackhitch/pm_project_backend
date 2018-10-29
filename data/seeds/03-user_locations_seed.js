exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_locations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users_locations').insert([
        { user_id: 1, location_id: 1 },
        { user_id: 2, location_id: 1 },
        { user_id: 3, location_id: 1 },
      ]);
    });
};
