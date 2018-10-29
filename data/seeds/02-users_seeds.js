exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ron_swanson',
          first_name: 'Ron',
          last_name: 'Swanson',
          email_address: 'rswanson@pawnee.gov',
        },
        {
          username: 'leslie_knope',
          first_name: 'Leslie',
          last_name: 'Knope',
          email_address: 'lknope@pawnee.gov',
        },
        {
          username: 'andy_dwyer',
          first_name: 'Andy',
          last_name: 'Dwyer',
          email_address: 'adwyer@pawnee.gov',
        },
        {
          username: 'april_ludgate',
          first_name: 'April',
          last_name: 'Ludgate',
          email_address: 'aludgate@pawnee.gov',
        },
      ]);
    });
};
