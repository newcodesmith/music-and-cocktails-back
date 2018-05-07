const albums = require('../albums');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert(albums);
    });
};
