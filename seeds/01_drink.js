const drinks = require('../drinks-seed-data');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "drink"; ALTER SEQUENCE events_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('drink').insert(drinks);
    });
};
