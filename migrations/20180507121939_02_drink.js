
exports.up = function(knex, Promise) {
    return knex.schema.createTable('drink', (table) => {
      table.increments();
      table.text('drink_title').notNullable();
      table.text('drink_description').notNullable();
      table.text('ingredients').notNullable();
      table.text('direction').notNullable();
      table.text('drink_pic_url');
      table.integer('album_id').references('album.id').unsigned().onDelete('cascade');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('drink');
  };
  