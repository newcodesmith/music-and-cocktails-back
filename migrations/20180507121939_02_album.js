
exports.up = function(knex, Promise) {
  return knex.schema.createTable('album', (table) => {
    table.increments('album_id');
    table.text('genre').notNullable();
    table.text('artist').notNullable();
    table.text('album_title').notNullable();
    table.text('album_info');
    table.text('spotify_album_id').notNullable();
    table.integer('album_drink_id').references('drink.drink_id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('album');
};
