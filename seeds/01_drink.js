const drinks = require('../drinks-seed-data');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('drink').del()
    .then(function () {
      // Inserts seed entries
      return knex('drink').insert(drinks);
    });
};
