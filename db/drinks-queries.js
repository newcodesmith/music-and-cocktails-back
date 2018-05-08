const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex('drink');
    },
    getOne(id) {
        return knex('drink')
            .where('id', id)
            .first();
    },
    create(drink) {
        return knex('drink')
            .insert(drink, '*');
    },
    update(id, drink) {
        return knex('drink')
            .where('id', id)
            .update(drink, '*');
    },
    delete(id) {
        return knex('drink')
            .where('id', id)
            .del();
    }
}