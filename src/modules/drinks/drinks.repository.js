const knex = require('../../config/knex');

function getAll() {
  return knex('drink');
}

function getOne(id) {
  return knex('drink').where('drink_id', id).first();
}

function create(drink) {
  return knex('drink').insert(drink, '*');
}

function update(id, drink) {
  return knex('drink').where('drink_id', id).update(drink, '*');
}

function remove(id) {
  return knex('drink').where('drink_id', id).del();
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
