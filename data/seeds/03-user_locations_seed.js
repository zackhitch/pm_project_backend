exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_locations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users_locations').insert([
        { user_id: 'a123', location_id: 1 },
        { user_id: 'b456', location_id: 1 },
        { user_id: 'c789', location_id: 1 },
      ]);
    });
};
