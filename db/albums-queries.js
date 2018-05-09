const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex('album')
        .join('drink', 'drink.id', 'album.drink_id');
    },
    getOne(id) {
        return knex('album')
            .join('drink', 'drink.id', 'album.drink_id')
            .where('drink.id', id)
            .first();
    },
    create(album) {
        return knex('album')
            .insert(album, '*');
    },
    update(id, album) {
        return knex('album')
            .where('id', id)
            .update(album, '*');
    },
    delete(id) {
        return knex('album')
            .where('id', id)
            .del();
    }
}