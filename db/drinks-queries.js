const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex('drink');
    },

    getOne(id) {
        return knex('drink')
            .where('drink_id', id)
            .first();
    },

    create(drink) {
        return knex('drink')
            .insert(drink, '*');
    },

    update(id, album) {      
        return knex('drink')
        .where('drink_id', id)
        .update(album, '*');
    },

    delete(id) {
        return knex('drink')
            .where('drink_id', id)
            .del();
    }
}