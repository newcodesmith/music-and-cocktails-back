const knex = require('../../config/knex');

function getAll() {
  return knex.from('album').innerJoin('drink', 'album.album_drink_id', 'drink.drink_id');
}

function getOne(id) {
  return knex
    .from('album')
    .innerJoin('drink', 'album.album_drink_id', 'drink.drink_id')
    .where('album_id', id)
    .first();
}

function create(album) {
  return knex('album').insert(album, '*');
}

function update(id, album) {
  return knex('album').where('album_id', id).update(album, '*');
}

function remove(id) {
  return knex('album').where('album_id', id).del();
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
