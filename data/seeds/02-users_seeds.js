exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 'a123',
          first_name: 'Ron',
          last_name: 'Swanson',
          email_address: 'rswanson@pawnee.gov',
        },
        {
          id: 'b456',
          first_name: 'Leslie',
          last_name: 'Knope',
          email_address: 'lknope@pawnee.gov',
        },
        {
          id: 'c789',
          first_name: 'Andy',
          last_name: 'Dwyer',
          email_address: 'adwyer@pawnee.gov',
        },
        {
          id: 'd101112',
          first_name: 'April',
          last_name: 'Ludgate',
          email_address: 'aludgate@pawnee.gov',
        },
      ]);
    });
};
