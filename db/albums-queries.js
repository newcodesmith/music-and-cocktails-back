const knex = require('./knex'); // the connection
// const joinAliases = 'album.id AS album_id, album.genre AS genre, album.artist AS artist, album.album_title AS album_title, album.album_info AS album_info, album.spotify_album_id AS spotify_album_id    drink.id AS drink_id';


module.exports = {
    getAll() {
        return knex.from('album')
            .innerJoin('drink', 'album.album_drink_id', 'drink.drink_id')
    },

    getOne(id) {
        return knex.from('album')
            .innerJoin('drink', 'album.album_drink_id', 'drink.drink_id')
            .where('album_id', id)
            .first();
    },

    create(album) {
        return knex('album')
            .insert(album, '*');
    },

    update(id, album) {
        return knex('album')
            .where('album_id', id)
            .update(album, '*');
    },

    delete(id) {
        return knex('album')
            .where('album_id', id)
            .del();
    }
}