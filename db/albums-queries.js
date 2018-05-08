const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex('album');
    },
    getOne(id) {
        return knex('album')
            .where('id', id)
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
    }
}