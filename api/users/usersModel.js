const db = require('../../data/dbConfig.js');

function find() {
  return db('users');
}

function findByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function addUser(user) {
  return db('users')
    .insert(user)
    .into('users');
}

function updateUser(username, changes) {
  return db('users')
    .where({ username })
    .update(changes);
}

function removeUser(username) {
  return db('users')
    .where({ username })
    .del();
}

module.exports = {
  find,
  findByUsername,
  addUser,
  updateUser,
  removeUser,
};
