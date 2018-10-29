exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('locations').insert([
        {
          city: 'Muncie',
          'state/province': 'IN',
          country: 'USA',
          longitude: -85.386878,
          latitude: 40.193493,
        },
        {
          city: 'Scranton',
          'state/province': 'PA',
          country: 'USA',
          longitude: -75.66502,
          latitude: 41.408609,
        },
        {
          city: 'Kauai',
          'state/province': 'HI',
          country: 'USA',
          longitude: 22.132814,
          latitude: -159.52899,
        },
      ]);
    });
};
