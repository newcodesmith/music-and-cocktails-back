const albums = require('../albums-seed-data');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert(albums);
    });
};
