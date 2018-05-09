
exports.up = function(knex, Promise) {
  return knex.schema.createTable('album', (table) => {
    table.increments();
    table.text('genre').notNullable();
    table.text('artist').notNullable();
    table.text('album_title').notNullable();
    table.text('album_info');
    table.text('spotify_album_id').notNullable();
    table.integer('drink_id').references('drink.id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('album');
};
