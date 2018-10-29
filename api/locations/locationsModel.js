const db = require('../../data/dbConfig.js');

module.exports = {
  find: function() {
    return db('locations');
  },

  findByCity: function(city) {
    return db('locations').where({ city });
  },

  findByState: function(state) {
    return db('locations').where({ 'state/province': state });
  },

  findByCountry: function(country) {
    return db('locations').where({ country });
  },

  addLocation: function(location) {
    return db('locations')
      .insert(location)
      .into('locations');
  },

  updateLocation: function(id, changes) {
    return db('locations')
      .where({ id })
      .update(changes);
  },

  removeLocation: function(id) {
    return db('locations')
      .where({ id })
      .del();
  },
};
